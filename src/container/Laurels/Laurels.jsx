import React, { useEffect } from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import Aos from "aos";
import "aos/dist/aos.css";

import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className="app__wrapper_info" data-aos="fade-right" data-aos-delay="500">
        <SubHeading title='Awards & recognition' />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>

      <div className="app__wrapper_img" data-aos="flip-right" data-aos-delay="500">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  )
}

export default Laurels;
