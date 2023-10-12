import React, { useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" data-aos="flip-up" data-aos-delay="500">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans" data-aos="fade-up" data-aos-delay="100"><a href="#home">Home</a></li>
        <li className="p__opensans" data-aos="fade-up" data-aos-delay="200"><a href="#about">About</a></li>
        <li className="p__opensans" data-aos="fade-up" data-aos-delay="300"><a href="#menu">Menu</a></li>
        <li className="p__opensans" data-aos="fade-up" data-aos-delay="400"><a href="#awards">Awards</a></li>
        <li className="p__opensans" data-aos="fade-up" data-aos-delay="500"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans" data-aos="fade-up" data-aos-delay="500">Log In / Registration</a>
        <div data-aos="fade" data-aos-delay="50"/>
        <a href="/" className="p__opensans" data-aos="fade-down" data-aos-delay="500">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
