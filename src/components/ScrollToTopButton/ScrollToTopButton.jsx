import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './ScrollToTopButton.css';
import arrowUp from '../../assets/scrolltop.png';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <img src={arrowUp} alt='Scroll to Top' />
    </div>
  );
};

export default ScrollToTopButton;
