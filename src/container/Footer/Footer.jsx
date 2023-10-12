import React, { useEffect } from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Aos from "aos";
import "aos/dist/aos.css";

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links" >
        <div className="app__footer-links_contact" data-aos="fade-right" data-aos-delay="500">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo" data-aos="fade-down" data-aos-delay="500">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon' />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work" data-aos="fade-left" data-aos-delay="500">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright" data-aos="fade-up" data-aos-delay="500">
        <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer;
