import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../scss/styles/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footercontainer">
      <div className="grid">
        <div className="column">
          <h5 className="text-lg font-bold mb-4">About Datify❤️</h5>
          <p className="text-sm">
            Datify is a leading dating platform dedicated to connecting people from all walks of life. Join us to find meaningful connections and start your love journey today.
          </p>
        </div>
        <div className="column">
          <h5 className="text-lg font-bold mb-4">Quick Links</h5>
          <ul className="text-sm space-y-2">
            <li><a href="/user/about" className="hover:underline">About Us</a></li>
            <li><a href="/user/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="column">
          <h5 className="text-lg font-bold mb-4">Follow Us</h5>
          <div className="social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-sm">© 2024 Datify. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
};
export default Footer
