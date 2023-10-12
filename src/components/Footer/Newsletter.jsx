import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
    <div className="app__newsletter" data-aos="fade-down" data-aos-delay="100">
      <div className="app__newsletter-heading" data-aos="fade-down" data-aos-delay="300">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center" data-aos="fade-up" data-aos-delay="400">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter;
