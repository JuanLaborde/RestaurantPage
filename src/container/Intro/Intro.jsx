import React, { useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease' });

  }, [])

  return (
  <div className='app__video' data-aos="fade" data-aos-delay="500">
    <video src={meal} ref={vidRef} type='video/mp4' loop controls={false} muted />
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
        {playVideo ? (
          <BsPauseFill color='#fff' fontSize={30}/>
        ) : <BsFillPlayFill color='#fff' fontSize={30}/>}
      </div>
    </div>
  </div>
  )
}

export default Intro;
