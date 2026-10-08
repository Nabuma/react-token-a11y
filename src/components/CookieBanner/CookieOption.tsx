import { useId } from 'react';

export type CookieOptionProps = {
  label: string;
  hint: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

const CookieOption = ({ label, hint, checked, disabled, onChange }: CookieOptionProps) => {
  const id = useId();
  return (
    <div className="cookie-banner__option">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-describedby={`${id}-hint`}
        onChange={(event) => onChange?.(event.target.checked)}
      />
      <div>
        <label htmlFor={id}>{label}</label>
        <span id={`${id}-hint`} className="cookie-banner__hint">
          {hint}
        </span>
      </div>
    </div>
  );
};

export default CookieOption;
