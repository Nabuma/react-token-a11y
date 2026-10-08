import './App.css';
import { CookieBanner, Button, SkipLink, useCookieBanner } from './components';
import {
  AccordionSection,
  ButtonsSection,
  CardsSection,
  FormSection,
  OverlaysSection,
  StatusSection,
  TabsSection,
} from './sections';

const App = () => {
  const { open, reopen, close, fallbackRef, reopenButtonRef } = useCookieBanner();

  return (
    <>
      <SkipLink targetId="main" />
      <CookieBanner open={open} onClose={close} />
      <header className="page-header">
        <h1>Accessible components</h1>
      </header>
      <main id="main" ref={fallbackRef} className="page-main" tabIndex={-1}>
        <ButtonsSection />
        <StatusSection />
        <CardsSection />
        <FormSection />
        <TabsSection />
        <AccordionSection />
        <OverlaysSection />
      </main>
      <footer className="page-footer">
        <p>react-tokens-a11y</p>
        <Button
          ref={reopenButtonRef}
          variant="tertiary"
          className="page-footer__action"
          onClick={reopen}
        >
          Cookie settings
        </Button>
      </footer>
    </>
  );
};

export default App;
