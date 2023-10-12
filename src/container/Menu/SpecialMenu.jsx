import React, { useEffect } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';
import Aos from "aos";
import "aos/dist/aos.css";

const SpecialMenu = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className="app__specialMenu-title" data-aos="fade-down" data-aos-delay="500">
        <SubHeading title='Menu that fits you palatte' />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center" data-aos="fade-right" data-aos-delay="500">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img" data-aos="fade" data-aos-delay="800">
          <img src={images.menu} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center" data-aos="fade-left" data-aos-delay="500">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 15 }} data-aos="fade-up" data-aos-delay="500">
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu;
