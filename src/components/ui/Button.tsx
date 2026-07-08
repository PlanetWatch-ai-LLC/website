import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'solid' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  fullWidth?: boolean;
  elevated?: boolean;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonElProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type Props = AnchorProps | ButtonElProps;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-5 py-2.5',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-7 py-3.5',
};

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border border-primary/40 text-primary hover:bg-primary/10',
};

export default function Button({
  variant = 'solid',
  size = 'md',
  pill = true,
  fullWidth = false,
  elevated = false,
  className = '',
  children,
  ...rest
}: Props) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200',
    pill ? 'rounded-full' : 'rounded-lg',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    elevated ? 'shadow-lg hover:shadow-primary/40 hover:shadow-xl' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
