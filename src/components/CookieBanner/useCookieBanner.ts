import { useRef, useState } from 'react';
import { readConsent } from '../../lib/cookieConsent';

// Owns the banner's open state and where focus goes when it closes.
const useCookieBanner = () => {
  const [open, setOpen] = useState(() => readConsent() === null);
  const fallbackRef = useRef<HTMLElement>(null);
  const reopenButtonRef = useRef<HTMLButtonElement>(null);
  const reopenedByUser = useRef(false);

  const reopen = () => {
    reopenedByUser.current = true;
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    // The banner unmounts: hand focus to a stable element instead of losing it
    (reopenedByUser.current ? reopenButtonRef.current : fallbackRef.current)?.focus();
    reopenedByUser.current = false;
  };

  return { open, reopen, close, fallbackRef, reopenButtonRef };
};

export default useCookieBanner;
