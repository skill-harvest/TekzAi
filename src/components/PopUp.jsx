import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiArrowRight, FiX } from 'react-icons/fi';
import announcement from '../assets/popup.jpg';
import styles from './Popup.module.css';

function Popup() {
  const [isOpen, setIsOpen] = useState(true);
  const dialog = useRef(null);
  const closeButton = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const app = document.querySelector('.app-container');
    const previousInert = app?.inert;
    document.body.style.overflow = 'hidden';
    if (app) app.inert = true;
    closeButton.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key !== 'Tab') return;
      const buttons = dialog.current?.querySelectorAll('button');
      const first = buttons?.[0];
      const last = buttons?.[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (app) app.inert = previousInert;
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return createPortal(
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="announcement-title" ref={dialog} onClick={(event) => event.stopPropagation()}>
        <div className={styles.header}><h2 id="announcement-title">A little news from TekzAi.</h2><button type="button" aria-label="Close announcement" onClick={() => setIsOpen(false)} ref={closeButton}><FiX aria-hidden="true" /></button></div>
        <img src={announcement} alt="The latest announcement from TekzAi Solutions" className={styles.image} />
        <button className={styles.continueButton} type="button" onClick={() => setIsOpen(false)}>Continue exploring <FiArrowRight aria-hidden="true" /></button>
      </section>
    </div>,
    document.body,
  );
}

export default Popup;
