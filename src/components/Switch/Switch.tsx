import { useState } from 'react';
import { cx } from '../../lib/cx';
import type { ButtonHTMLAttributes } from 'react';
import './Switch.css';

export type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'role' | 'aria-checked'> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

const Switch = ({
  checked,
  defaultChecked = false,
  onCheckedChange,
  className,
  children = 'Switch',
  ...buttonProps
}: SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onCheckedChange?.(next);
  };

  return (
    <button
      {...buttonProps}
      type="button"
      role="switch"
      aria-checked={isChecked}
      className={cx('switch', className)}
      onClick={handleClick}
    >
      <span className="switch__track" aria-hidden="true">
        <span className="switch__thumb" />
      </span>
      <span className="switch__label">{children}</span>
      <span className="switch__state" aria-hidden="true">
        {isChecked ? 'On' : 'Off'}
      </span>
    </button>
  );
};

export default Switch;
