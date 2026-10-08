import { useState } from 'react';
import CookiePanel from './CookiePanel';
import { writeConsent } from '../../lib/cookieConsent';
import type { CookieConsent } from '../../lib/cookieConsent';
import './CookieBanner.css';

export type CookieBannerProps = {
  open: boolean;
  onClose: () => void;
};

// Non-modal on purpose: it never traps focus or blocks the page, and it has
// no dismiss button, so closing it always means the user made a choice.
const CookieBanner = ({ open, onClose }: CookieBannerProps) => {
  const [message, setMessage] = useState('');

  const save = (consent: CookieConsent, announcement: string) => {
    writeConsent(consent);
    setMessage(announcement);
    onClose();
  };

  return (
    <>
      {/* Stays mounted so the confirmation is announced after the banner closes */}
      <output className="visually-hidden">{message}</output>
      {open && <CookiePanel onSave={save} />}
    </>
  );
};

export default CookieBanner;
