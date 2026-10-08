import { cx } from '../../lib/cx';
import type { HTMLAttributes } from 'react';
import './Badge.css';

type BadgeStatus = 'pending' | 'valid' | 'invalid' | 'warning';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  status?: BadgeStatus;
};

const ICONS: Record<BadgeStatus, string> = {
  pending: '…',
  valid: '✓',
  invalid: '✕',
  warning: '!',
};

const LABELS: Record<BadgeStatus, string> = {
  pending: 'Pending',
  valid: 'Valid',
  invalid: 'Invalid',
  warning: 'Warning',
};

// Status is conveyed by text and icon, never by color alone.
const Badge = ({ status = 'pending', className, children = LABELS[status], ...spanProps }: BadgeProps) => (
  <span {...spanProps} className={cx('badge', `badge--${status}`, className)}>
    <span className="badge__icon" aria-hidden="true">
      {ICONS[status]}
    </span>
    {children}
  </span>
);

export default Badge;
