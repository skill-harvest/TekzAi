import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { SiteEffects } from './components/SiteUI';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="app-container">
      <Router>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <SiteEffects />
        <main className="content" id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
