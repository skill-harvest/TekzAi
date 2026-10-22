import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useSearchParams } from 'react-router-dom';
import { FiArrowUpRight, FiCheck, FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { PageIntro } from '../../components/SiteUI';
import { contact, products } from '../../data/siteContent';
import './Contact.css';

function Contact() {
  const form = useRef(null);
  const [searchParams] = useSearchParams();
  const selectedProduct = products.find(({ id }) => id === searchParams.get('product'));
  const enquiryMessage = selectedProduct ? `Hi TekzAi, I’d like to learn more about ${selectedProduct.code} (${selectedProduct.title}) and discuss how it could fit our business.` : '';
  const [status, setStatus] = useState('idle');

  const sendEmail = async (event) => {
    event.preventDefault();
    if (status === 'sending') return;
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !publicKey) {
      setStatus('unavailable');
      return;
    }
    setStatus('sending');
    try {
      await emailjs.sendForm(service, template, form.current, publicKey);
      form.current?.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageIntro />
      <section className="site-section contact-layout" aria-labelledby="contact-heading">
        <div className="contact-details reveal">
          <p className="eyebrow">SAY HELLO, YOUR WAY</p><h2 id="contact-heading">A conversation.<br />A fresh perspective.</h2><p>Tell us a little about what you have in mind. We’ll listen, ask the right questions, and help you find a useful next step.</p>
          <div className="contact-methods"><a href={`mailto:${contact.email}`}><span className="icon-tile"><FiMail aria-hidden="true" /></span><span><small>DROP US A LINE</small>{contact.email}</span><FiArrowUpRight aria-hidden="true" /></a><a href={contact.phoneHref}><span className="icon-tile tone-mint"><FiPhone aria-hidden="true" /></span><span><small>GIVE US A CALL</small>{contact.phone}</span><FiArrowUpRight aria-hidden="true" /></a><a href={contact.maps} target="_blank" rel="noopener noreferrer"><span className="icon-tile tone-peach"><FiMapPin aria-hidden="true" /></span><span><small>FIND US HERE</small>{contact.address}</span><FiArrowUpRight aria-hidden="true" /></a></div>
          <div className="contact-hours"><FiClock aria-hidden="true" /><span><strong>A good time to reach us</strong>{contact.hours}</span></div>
        </div>
        <div className="contact-form-panel reveal"><span className="contact-form-panel__icon" aria-hidden="true"><FiMessageCircle /></span><h3>What’s on your mind?</h3><p>No perfect brief needed. Just start with hello.</p>
          {selectedProduct && <div className="contact-product-context"><span>YOU’RE ASKING ABOUT</span><Link to={`/products/${selectedProduct.id}`}>{selectedProduct.code} <FiArrowUpRight aria-hidden="true" /></Link></div>}
          <form key={selectedProduct?.id || 'general'} ref={form} onSubmit={sendEmail} aria-label="Send an enquiry" aria-busy={status === 'sending'}>
            <div className="form-row"><div className="form-field"><label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label><input id="contact-name" name="from_name" type="text" placeholder="Alex Morgan" autoComplete="name" required maxLength={120} /></div><div className="form-field"><label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label><input id="contact-email" name="from_email" type="email" placeholder="alex@company.com" autoComplete="email" required maxLength={254} /></div></div>
            <div className="form-field"><label htmlFor="contact-phone">Phone number <span aria-hidden="true">*</span></label><input id="contact-phone" name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required maxLength={40} /></div>
            <div className="form-field"><label htmlFor="contact-message">Tell us a little about it <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" defaultValue={enquiryMessage} placeholder="An idea, a challenge, or something you’d like to explore…" rows={5} required maxLength={5000} /></div>
            <button className="button button--dark contact-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending your message…' : 'Send your enquiry'}<FiArrowUpRight aria-hidden="true" /></button>
            <p className="form-note">Your details help us get back to you about your enquiry.</p>
            <div aria-live="polite" aria-atomic="true">{status === 'success' && <p className="form-status form-status--success" role="status"><FiCheck aria-hidden="true" />Thank you for reaching out. We’ll be in touch shortly.</p>}</div>
            {(status === 'error' || status === 'unavailable') && <p className="form-status form-status--error" role="alert">{status === 'unavailable' ? 'Message delivery is temporarily unavailable.' : 'Your message couldn’t be sent. Please try again.'} You can also <a href={`mailto:${contact.email}`}>email us directly</a> or <a href={contact.phoneHref}>give us a call</a>.</p>}
          </form>
        </div>
      </section>
      <section className="contact-bottom site-section reveal"><FiMessageCircle aria-hidden="true" /><div><h2>Prefer a quick hello?</h2><p>We’re a message away on WhatsApp, too.</p></div><a className="button button--light" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Say hello on WhatsApp <FiArrowUpRight aria-hidden="true" /></a></section>
    </>
  );
}

export default Contact;
