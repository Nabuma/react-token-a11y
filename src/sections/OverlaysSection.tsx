import { useState } from 'react';
import { Alert, Button, Modal } from '../components';
import DemoSection from './DemoSection';

const OverlaysSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <DemoSection title="Dialog and alert">
      <div className="cluster">
        <Button variant="secondary" onClick={() => setModalOpen(true)}>
          Open dialog
        </Button>
        <Button variant="secondary" onClick={() => setShowAlert(true)}>
          Show alert
        </Button>
      </div>
      {showAlert && (
        <Alert severity="error" onDismiss={() => setShowAlert(false)}>
          We couldn't save your changes. Check your connection and try again.
        </Alert>
      )}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Confirm subscription">
        <p>Focus is trapped here, Escape closes the dialog, and focus returns to the button that opened it.</p>
      </Modal>
    </DemoSection>
  );
};

export default OverlaysSection;
