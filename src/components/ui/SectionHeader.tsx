type EyebrowColor = 'primary' | 'moss';

interface SectionHeaderProps {
  eyebrow: string;
  eyebrowColor?: EyebrowColor;
  heading: string;
  description?: string;
  dark?: boolean;
}

const eyebrowClasses: Record<EyebrowColor, string> = {
  primary: 'text-primary',
  moss: 'text-moss',
};

export default function SectionHeader({
  eyebrow,
  eyebrowColor = 'primary',
  heading,
  description,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl mb-16">
      <p
        className={`${eyebrowClasses[eyebrowColor]} font-semibold text-sm uppercase tracking-widest mb-3`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl lg:text-4xl font-bold leading-tight ${description ? 'mb-5' : ''} ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${dark ? 'text-gray-300' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
