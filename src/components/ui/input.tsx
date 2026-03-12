'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, required, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm text-muted mb-2 uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-gold ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-transparent border px-4 py-3',
            'text-off-white placeholder:text-muted/60',
            'transition-all duration-300 ease-out',
            'focus:outline-none focus:ring-1',
            error
              ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/30'
              : 'border-white/20 focus:border-gold/60 focus:ring-gold/30',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-muted">
            {helperText}
          </p>
        )}
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  showCount?: boolean;
  value?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, required, maxLength, showCount, value, ...props }, ref) => {
    const inputId = id || props.name;
    const charCount = value?.length || 0;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm text-muted mb-2 uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-gold ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          value={value}
          maxLength={maxLength}
          className={cn(
            'w-full bg-transparent border px-4 py-3 min-h-[120px] resize-none',
            'text-off-white placeholder:text-muted/60',
            'transition-all duration-300 ease-out',
            'focus:outline-none focus:ring-1',
            error
              ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/30'
              : 'border-white/20 focus:border-gold/60 focus:ring-gold/30',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        <div className="flex justify-between mt-1.5">
          <div>
            {helperText && !error && (
              <p id={`${inputId}-helper`} className="text-xs text-muted">
                {helperText}
              </p>
            )}
            {error && (
              <p id={`${inputId}-error`} className="text-xs text-red-400" role="alert">
                {error}
              </p>
            )}
          </div>
          {showCount && maxLength && (
            <p className="text-xs text-muted">
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string | React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={inputId}
              className={cn(
                'peer h-5 w-5 appearance-none border bg-transparent cursor-pointer',
                'transition-all duration-200',
                'checked:bg-gold checked:border-gold',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-near-black',
                error ? 'border-red-500/60' : 'border-white/30 hover:border-white/50',
                className
              )}
              aria-invalid={error ? 'true' : 'false'}
              {...props}
            />
            <svg
              className="absolute w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 text-near-black"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <span className="text-sm text-muted group-hover:text-off-white transition-colors">
            {label}
          </span>
        </label>
        {error && (
          <p className="mt-1.5 text-xs text-red-400 ml-8" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
