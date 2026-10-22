import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight, FiArrowUpRight, FiBookOpen, FiBox,
  FiCheck, FiCloud, FiCode, FiCpu,
} from 'react-icons/fi';
import './HeroShowcase.css';

function TechnologyPreview() {
  return (
    <div className="tek-hero__technology-preview">
      <div className="tek-hero__preview-brand"><FiCpu aria-hidden="true" /> TEKZAI <span>IDEAS INTO IMPACT</span></div>
      <div className="tek-hero__preview-copy"><span>MADE FOR WHAT’S NEXT.</span><p>Less complexity.<br /><span>More possibility.</span></p></div>
      <div className="tek-hero__sculpture" aria-hidden="true">
        <div className="tek-hero__orbit tek-hero__orbit--one" />
        <div className="tek-hero__orbit tek-hero__orbit--two" />
        <div className="tek-hero__core"><FiCpu /></div>
        <span className="tek-hero__satellite tek-hero__satellite--one"><FiCode /></span>
        <span className="tek-hero__satellite tek-hero__satellite--two"><FiCloud /></span>
        <span className="tek-hero__satellite tek-hero__satellite--three"><FiBox /></span>
      </div>
      <div className="tek-hero__preview-footer"><span>SOFTWARE · AI · CLOUD</span><FiArrowUpRight aria-hidden="true" /></div>
    </div>
  );
}

function LearningPreview() {
  return (
    <div className="tek-hero__learning-preview">
      <div className="tek-hero__preview-bar"><span /><span /><span /><span>tkz.lms</span></div>
      <div className="tek-hero__learning-icon" aria-hidden="true"><FiBookOpen /></div>
      <p>A little learning.<br />A world of possibility.</p>
      <div className="tek-hero__lesson" aria-hidden="true"><span><FiCheck /></span><i /><FiArrowRight /></div>
      <div className="tek-hero__lesson" aria-hidden="true"><span><FiBookOpen /></span><i /><FiArrowRight /></div>
      <span className="tek-hero__preview-label">LEARNING MANAGEMENT <FiArrowUpRight aria-hidden="true" /></span>
    </div>
  );
}

function AssetPreview() {
  return (
    <div className="tek-hero__asset-preview">
      <div className="tek-hero__preview-bar"><span /><span /><span /><span>tkz.amt</span></div>
      <div className="tek-hero__asset-heading"><FiBox aria-hidden="true" /><span>Everything,<br />in its place.</span></div>
      <div className="tek-hero__asset-grid" aria-hidden="true">
        <span><FiBox /><i /></span><span><FiCpu /><i /></span>
        <span><FiCloud /><i /></span><span><FiCode /><i /></span>
      </div>
      <span className="tek-hero__preview-label">ASSET MANAGEMENT <FiArrowUpRight aria-hidden="true" /></span>
    </div>
  );
}

const slides = [
  { id: 'technology', title: 'Software, AI & cloud', label: 'Explore custom software, AI, and cloud solutions', to: '/services', Preview: TechnologyPreview },
  { id: 'learning', title: 'Learning management', label: 'Explore TKZ learning management', to: '/products/tkz-lms', Preview: LearningPreview },
  { id: 'assets', title: 'Asset management', label: 'Explore TKZ asset management', to: '/products/tkz-amt', Preview: AssetPreview },
];

function HeroShowcase() {
  const region = useRef(null);
  const gesture = useRef(null);
  const suppressClickUntil = useRef(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('next');
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hovered, setHovered] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = () => setReducedMotion(media.matches);
    const onVisibility = () => setPageVisible(!document.hidden);
    media.addEventListener('change', onMotionChange);
    document.addEventListener('visibilitychange', onVisibility);
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.25), { threshold: 0.25 });
      observer.observe(region.current);
    } else {
      setVisible(true);
    }
    return () => {
      observer?.disconnect();
      media.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || hovered || focusPaused || !visible || !pageVisible || dragging) return;
    const timer = window.setInterval(() => {
      if (region.current?.closest('[inert]') || document.querySelector('.tek-nav--open')) return;
      setDirection('next');
      setActive((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [active, reducedMotion, hovered, focusPaused, visible, pageVisible, dragging]);

  const selectSlide = (index) => {
    const target = (index + slides.length) % slides.length;
    if (target !== active) setDirection((target - active + slides.length) % slides.length === 1 ? 'next' : 'previous');
    setActive(target);
  };

  const onKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    selectSlide(active + (event.key === 'ArrowRight' ? 1 : -1));
  };

  const onPointerDown = (event) => {
    if (event.button !== 0 || !event.isPrimary) return;
    suppressClickUntil.current = 0;
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, dragging: false };
  };

  const onPointerMove = (event) => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    const x = event.clientX - start.x;
    const y = event.clientY - start.y;
    if (!start.dragging) {
      if (Math.abs(y) > Math.abs(x) && Math.abs(y) > 8) {
        gesture.current = null;
        return;
      }
      if (Math.abs(x) < 8) return;
      start.dragging = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    setDragOffset(Math.max(-140, Math.min(140, x)));
  };

  const finishGesture = (event, cancelled = false) => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    if (start.dragging) {
      suppressClickUntil.current = performance.now() + 350;
      const x = event.clientX - start.x;
      if (!cancelled && Math.abs(x) > 45) selectSlide(active + (x < 0 ? 1 : -1));
    }
    gesture.current = null;
    setDragging(false);
    setDragOffset(0);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      className="tek-showcase"
      data-direction={direction}
      role="region"
      aria-roledescription="carousel"
      aria-label="What we build"
      ref={region}
      onKeyDown={onKeyDown}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse') setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(false);
      }}
    >
      <div
        className="tek-showcase__viewport"
        id="tek-showcase-slides"
        data-dragging={dragging || undefined}
        style={{ '--swipe-offset': `${dragOffset}px` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => finishGesture(event)}
        onPointerCancel={(event) => finishGesture(event, true)}
        onLostPointerCapture={(event) => {
          // Touch starts with implicit capture on the card; ignore its transfer to the viewport.
          if (event.target !== event.currentTarget) return;
          gesture.current = null;
          setDragging(false);
          setDragOffset(0);
        }}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (event.detail && performance.now() < suppressClickUntil.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        {slides.map(({ id, title, label, to, Preview }, index) => {
          const position = index === active ? 'active' : index === (active + 1) % slides.length ? 'next' : 'previous';
          return (
            <div className="tek-showcase__slide" data-position={position} key={id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${title}`} aria-hidden={index !== active} inert={index !== active ? '' : undefined}>
              <Link className="tek-hero__frame" to={to} aria-label={label} draggable={false}><Preview /></Link>
            </div>
          );
        })}
      </div>

      <p className="tek-showcase__status sr-only" aria-live={reducedMotion || focusPaused ? 'polite' : 'off'} aria-atomic="true">Card {active + 1} of {slides.length}: {slides[active].title}</p>
      <p className="tek-hero__showcase-note">Thoughtfully built. Ready for your next chapter.</p>
    </div>
  );
}

export default HeroShowcase;
