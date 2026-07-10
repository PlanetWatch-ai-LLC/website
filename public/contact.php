<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$configPath = __DIR__ . '/contact-config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server not configured.']);
    exit;
}
require $configPath;

require __DIR__ . '/lib/phpmailer/Exception.php';
require __DIR__ . '/lib/phpmailer/PHPMailer.php';
require __DIR__ . '/lib/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\Exception as PHPMailerException;
use PHPMailer\PHPMailer\PHPMailer;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$input = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

// Honeypot: real users never fill this hidden field in.
if (trim((string) ($input['company'] ?? '')) !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

function contact_clean_field($value): string
{
    return trim(strip_tags((string) ($value ?? '')));
}

$firstName = contact_clean_field($input['firstName'] ?? '');
$lastName = contact_clean_field($input['lastName'] ?? '');
$email = trim((string) ($input['email'] ?? ''));
$intent = contact_clean_field($input['intent'] ?? '') === 'investor' ? 'investor' : 'operator';
$siteType = contact_clean_field($input['siteType'] ?? '');
$message = contact_clean_field($input['message'] ?? '');

$errors = [];
if ($firstName === '') {
    $errors[] = 'First name is required.';
}
if ($lastName === '') {
    $errors[] = 'Last name is required.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required.';
}
if ($intent === 'operator' && $siteType === '') {
    $errors[] = 'Site type is required.';
}

if ($errors !== []) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode(' ', $errors)]);
    exit;
}

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = CONTACT_SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = CONTACT_SMTP_USER;
    $mail->Password = CONTACT_SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = CONTACT_SMTP_PORT;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->setFrom(CONTACT_FROM_EMAIL, 'PlanetWatch Website');
    $mail->addAddress(CONTACT_TO_EMAIL);
    $mail->addReplyTo($email, trim("$firstName $lastName"));

    $mail->Subject = sprintf(
        '[PlanetWatch] New %s inquiry from %s %s',
        $intent === 'investor' ? 'investor' : 'operator',
        $firstName,
        $lastName
    );
    $mail->Body = implode("\n", array_filter([
        "Intent: $intent",
        "Name: $firstName $lastName",
        "Email: $email",
        $siteType !== '' ? "Site type: $siteType" : null,
        '',
        'Message:',
        $message !== '' ? $message : '(none)',
    ], static fn ($line) => $line !== null));

    $mail->send();
    echo json_encode(['ok' => true]);
} catch (PHPMailerException $e) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => "Could not send message. Please try again later."]);
}
