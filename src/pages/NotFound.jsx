import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiCompass } from 'react-icons/fi';

function NotFound() {
  return (
    <section className="page-intro not-found" aria-labelledby="not-found-title">
      <div className="page-intro__glow" aria-hidden="true" />
      <span className="page-intro__mark" aria-hidden="true"><FiCompass /></span>
      <p className="eyebrow">404 / A LITTLE OFF THE MAP</p>
      <h1 id="not-found-title"><span>Let’s find a better</span><span>way forward.</span></h1>
      <p className="page-intro__description">We couldn’t find the page you’re looking for. Explore the TekzAi product suite or head back home to find your next possibility.</p>
      <div className="not-found__actions"><Link className="button button--dark" to="/products">Explore our products <FiArrowUpRight aria-hidden="true" /></Link><Link className="text-link" to="/"><FiArrowLeft aria-hidden="true" />Back to home</Link></div>
    </section>
  );
}

export default NotFound;
