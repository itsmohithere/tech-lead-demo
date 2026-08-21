import { forwardRef, useId, type InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, helperText, className = '', disabled, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const helperTextId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  const describedBy = error ? errorId : helperText ? helperTextId : undefined;

  const inputClasses = [
    'h-10 w-full rounded-md border bg-background-primary px-3 text-sm text-text-primary',
    'placeholder:text-text-secondary',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
    'disabled:cursor-not-allowed disabled:bg-background-disabled disabled:text-text-disabled',
    error
      ? 'border-border-danger focus-visible:ring-border-danger'
      : 'border-border-default focus-visible:border-border-focus',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-text-primary"
        >
          {label}
        </label>
      )}
      <img alt='asdds' src='/asdsadsadasd'/>
      <input
        ref={ref}
        id={inputId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={inputClasses}
        {...props}
      />

      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-text-danger">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={helperTextId} className="mt-1.5 text-sm text-text-secondary">
          {helperText}
        </p>
      )}
    </div>
  );
});
