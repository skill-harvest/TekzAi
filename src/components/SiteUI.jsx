import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiCpu, FiMessageCircle } from 'react-icons/fi';
import { process, products } from '../data/siteContent';

const pages = {
  '/about': { label: 'THE PEOPLE BEHIND THE POSSIBILITIES', title: ['Your ambition.', 'Our shared purpose.'], description: 'We’re TekzAi. A team of thinkers, builders, and problem solvers helping businesses move forward with technology that makes a difference.', name: 'About us' },
  '/services': { label: 'THOUGHTFULLY BUILT. MADE FOR YOU.', title: ['Good technology.', 'Great possibilities.'], description: 'From your first idea to your next big leap, we bring the expertise to make it happen. Thoughtful solutions. One committed technology partner.', name: 'Our services' },
  '/products': { label: 'LESS COMPLEXITY. MORE POSSIBILITY.', title: ['A smarter way to do', 'your everyday.'], description: 'Meet the TekzAi product suite. Purpose-built tools that simplify the way you learn, manage, connect, and grow.', name: 'Our products' },
  '/contact': { label: 'EVERY GREAT PARTNERSHIP STARTS HERE', title: ['Your next chapter.', 'Let’s talk about it.'], description: 'A big idea, a question, or a challenge you’re working through. Whatever brings you here, we’d love to hear it.', name: 'Contact' },
};

export function PageIntro() {
  const { pathname } = useLocation();
  const page = pages[pathname.replace(/\/+$/, '') || '/'];
  if (!page) return null;
  return (
    <section className="page-intro" aria-labelledby="page-title">
      <div className="page-intro__glow" aria-hidden="true" />
      <span className="page-intro__mark" aria-hidden="true"><FiCpu /></span>
      <p className="eyebrow"><FiArrowRight aria-hidden="true" /> {page.label}</p>
      <h1 id="page-title">{page.title.map((line) => <span key={line}>{line}</span>)}</h1>
      <p className="page-intro__description">{page.description}</p>
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{page.name}</span></nav>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="contact-cta reveal" aria-labelledby="cta-heading">
      <span className="contact-cta__mark" aria-hidden="true"><FiMessageCircle /></span>
      <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
      <h2 id="cta-heading">Let’s make your next<br />big thing happen.</h2>
      <p>Bring your ambition. We’ll bring the ideas, the expertise,<br className="desktop-break" /> and a genuine commitment to getting it right.</p>
      <Link className="button button--dark" to="/contact">Book a free consultation <FiArrowUpRight aria-hidden="true" /></Link>
      <span className="contact-cta__note">A friendly chat. A clear next step.</span>
    </section>
  );
}

export function WorkingTogether() {
  return (
    <section className="site-section" aria-labelledby="process-heading">
      <div className="section-heading reveal"><div><p className="eyebrow">THE WAY WE WORK</p><h2 id="process-heading">A clear path.<br />A shared destination.</h2></div><p>Good work comes from working together.<br />Here’s how we get from your idea to its impact.</p></div>
      <ol className="process-grid">
        {process.map((step, index) => <li className="process-step reveal" key={step.title}><span className="process-step__number">0{index + 1} <FiArrowRight aria-hidden="true" /></span><h3>{step.title}</h3><p>{step.description}</p></li>)}
      </ol>
    </section>
  );
}

export function SiteEffects() {
  const { pathname, key } = useLocation();
  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const product = products.find(({ id }) => normalizedPath === `/products/${id}`);
    const title = product ? `${product.code} · ${product.title}` : pages[normalizedPath]?.name || (normalizedPath === '/' ? 'Technology that moves you forward' : 'Page not found');
    document.title = `${title} | TekzAi`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = product?.description || pages[normalizedPath]?.description || 'Thoughtful software, intelligent AI, and cloud solutions that help your business move forward. Discover the TekzAi product suite and services.';
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const elements = [...document.querySelectorAll('.reveal')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.revealed = 'true';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight - 24) {
        element.dataset.revealReady = 'true';
        observer.observe(element);
      }
    });
    const onMotionChange = () => {
      if (media.matches) {
        elements.forEach((element) => { element.dataset.revealed = 'true'; });
        observer.disconnect();
      }
    };
    media.addEventListener('change', onMotionChange);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', onMotionChange);
      elements.forEach((element) => { delete element.dataset.revealReady; });
    };
  }, [pathname, key]);
  return null;
}
