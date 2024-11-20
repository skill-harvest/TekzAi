import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-about">
          <h4>About TEKZAI</h4>
          <p>
            TEKZAI is dedicated to empowering businesses through cutting-edge technology solutions,
            enabling them to focus on core activities and achieve sustainable growth.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Section with Icons */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><i className="fas fa-map-marker-alt"></i>  554, PHC, Kasaragod, 671121, Kerala</p>
          <p><i className="fas fa-phone-alt"></i>  +91 9400480459</p>
          <p><i className="fas fa-envelope"></i>  tekzaiaws@gmail.com</p>
        </div>
      </div>

      {/* Desktop Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2023 TEKZAI. All Rights Reserved.</p>
        <p>Powered by TekzAi</p>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="footer-mobile">
        <div className="footer-mobile-item">
          <i className="fas fa-phone"></i>
          <span>Call</span>
        </div>
        <div className="footer-mobile-item">
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </div>
        <div className="footer-mobile-item" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-arrow-up"></i>
          <span>Top</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;