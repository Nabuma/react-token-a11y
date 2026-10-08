import type { ReactNode } from 'react';
import './Alert.css';

type AlertSeverity = 'info' | 'success' | 'warning' | 'error';

export type AlertProps = {
  severity?: AlertSeverity;
  title?: string;
  children: ReactNode;
  onDismiss?: () => void;
};

const ICONS: Record<AlertSeverity, string> = {
  info: 'i',
  success: '✓',
  warning: '!',
  error: '✕',
};

const LABELS: Record<AlertSeverity, string> = {
  info: 'Information',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
};

// Urgent messages interrupt (alert); the others wait politely (status).
const Alert = ({ severity = 'info', title, children, onDismiss }: AlertProps) => {
  const role = severity === 'error' || severity === 'warning' ? 'alert' : 'status';

  return (
    <div role={role} className={`alert alert--${severity}`}>
      <span className="alert__icon" aria-hidden="true">
        {ICONS[severity]}
      </span>
      <div className="alert__content">
        <p className="alert__title">{title ?? LABELS[severity]}</p>
        <p>{children}</p>
      </div>
      {onDismiss && (
        <button type="button" className="alert__dismiss" onClick={onDismiss} aria-label="Dismiss message">
          <span aria-hidden="true">✕</span>
        </button>
      )}
    </div>
  );
};

export default Alert;
