import { useEffect, useId, useRef } from 'react';
import Button from '../Button';
import type { ReactNode } from 'react';
import './Modal.css';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

// Native <dialog> provides the focus trap, inert background, Escape to close
// and focus restoration to the trigger.
const Modal = ({ open, onClose, title, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={dialogRef} className="modal" aria-labelledby={titleId} onClose={onClose}>
      <div className="modal__content">
        <h2 id={titleId} className="modal__title">
          {title}
        </h2>
        <div className="modal__body">{children}</div>
        <Button onClick={onClose}>Close</Button>
      </div>
    </dialog>
  );
};

export default Modal;
