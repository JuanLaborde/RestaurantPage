import React, { useEffect } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import Aos from "aos";
import "aos/dist/aos.css";
import './findus.css';
const FindUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
    <div className="app__bg app__wrapper section__padding overflow__hidden" id="contact">
      <div className="app__wrapper_info" data-aos="flip-right" data-aos-delay="500">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>

      <div className="app__wrapper_img" data-aos="flip-left" data-aos-delay="500">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  )
}

export default FindUs;
