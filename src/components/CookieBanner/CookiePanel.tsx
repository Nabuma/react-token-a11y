import { useId, useState } from 'react';
import Button from '../Button';
import CookieOption from './CookieOption';
import { readConsent } from '../../lib/cookieConsent';
import type { CookieConsent } from '../../lib/cookieConsent';

export type CookiePanelProps = {
  onSave: (consent: CookieConsent, announcement: string) => void;
};

// Mounted only while open, so its state starts from the stored choice.
const CookiePanel = ({ onSave }: CookiePanelProps) => {
  const titleId = useId();
  const detailsId = useId();
  const stored = readConsent();
  // Reopened from the footer: show the current choices right away
  const [expanded, setExpanded] = useState(stored !== null);
  const [analytics, setAnalytics] = useState(stored?.analytics ?? false);
  const [marketing, setMarketing] = useState(stored?.marketing ?? false);

  return (
    <section className="cookie-banner" aria-labelledby={titleId}>
      <h2 id={titleId} className="cookie-banner__title">
        Cookies on this site
      </h2>
      <p>
        Necessary cookies keep the site working. With your permission, we would also like to use analytics and
        marketing cookies. You can change your choice at any time.
      </p>

      <div id={detailsId} hidden={!expanded}>
        <fieldset className="cookie-banner__fieldset">
          <legend>Cookie categories</legend>
          <CookieOption label="Necessary" hint="Always on. Required for the site to work." checked disabled />
          <CookieOption
            label="Analytics"
            hint="Helps us understand how the site is used."
            checked={analytics}
            onChange={setAnalytics}
          />
          <CookieOption
            label="Marketing"
            hint="Used to show you relevant offers."
            checked={marketing}
            onChange={setMarketing}
          />
        </fieldset>
      </div>

      <div className="cookie-banner__actions">
        <Button variant="primary" onClick={() => onSave({ analytics: true, marketing: true }, 'All cookies accepted.')}>
          Accept all
        </Button>
        <Button
          variant="secondary"
          onClick={() => onSave({ analytics: false, marketing: false }, 'Only necessary cookies are used.')}
        >
          Reject all
        </Button>
        <Button
          variant="tertiary"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((value) => !value)}
        >
          Customize
        </Button>
        {expanded && (
          <Button variant="primary" onClick={() => onSave({ analytics, marketing }, 'Cookie preferences saved.')}>
            Save preferences
          </Button>
        )}
      </div>
    </section>
  );
};

export default CookiePanel;
