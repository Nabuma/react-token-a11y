import { useId } from 'react';
import { cx } from '../../lib/cx';
import type { InputHTMLAttributes } from 'react';
import './TextField.css';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

const TextField = ({ label, hint, error, id, className, required, ...inputProps }: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cx('field', error && 'field--invalid', className)}>
      <label className="field__label" htmlFor={inputId}>
        {label}
        {required && <span className="field__required"> (required)</span>}
      </label>
      {hint && (
        <p className="field__hint" id={hintId}>
          {hint}
        </p>
      )}
      <input
        {...inputProps}
        id={inputId}
        className="field__input"
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {error && (
        <p className="field__error" id={errorId}>
          <span aria-hidden="true">✕ </span>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextField;
