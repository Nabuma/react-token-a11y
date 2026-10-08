import { cx } from '../../lib/cx';
import type { ComponentPropsWithRef } from 'react';
import './Button.css';

export type ButtonProps = Omit<ComponentPropsWithRef<'button'>, 'size'> & {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
};

const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  className,
  type = 'button',
  children = 'Button',
  ...buttonProps
}: ButtonProps) => (
  <button
    {...buttonProps}
    type={type}
    className={cx('button', `button--${variant}`, `button--${size}`, isLoading && 'button--loading', className)}
    disabled={disabled || isLoading}
    aria-busy={isLoading || undefined}
  >
    {children}
  </button>
);

export default Button;
