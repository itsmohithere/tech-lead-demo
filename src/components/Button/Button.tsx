import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:pointer-events-none disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-action-primary text-text-inverse hover:bg-action-primary-hover active:bg-action-primary-active disabled:bg-action-disabled disabled:text-text-disabled',

  secondary:
    'bg-action-secondary text-text-primary hover:bg-action-secondary-hover active:bg-action-secondary-active disabled:bg-action-disabled disabled:text-text-disabled',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = disabled || loading;

  return (
    <button type={type} className={classes} disabled={isDisabled} {...props}>
      {loading ? (
        <span className={classes}>
          <Spinner />
        </span>
      ) : (
        children
      )}
    </button>
  );
}
