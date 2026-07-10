<?php
/**
 * Copy this file to contact-config.php and fill in real values.
 *
 * contact-config.php must NOT be committed to git and must NOT be deployed
 * via the automated build (it is not copied into dist/ by Vite). Upload it
 * by hand directly into the web root on OVH, alongside contact.php.
 */

define('CONTACT_SMTP_HOST', 'ssl0.ovh.net');
define('CONTACT_SMTP_PORT', 587);
define('CONTACT_SMTP_USER', 'noreply@planetwatch.ai');
define('CONTACT_SMTP_PASS', 'REPLACE_WITH_MAILBOX_PASSWORD');
define('CONTACT_FROM_EMAIL', 'noreply@planetwatch.ai');
define('CONTACT_TO_EMAIL', 'contact@planetwatch.ai');
