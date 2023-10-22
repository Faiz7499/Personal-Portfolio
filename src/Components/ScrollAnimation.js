// ScrollAnimation.js
import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const scrollAnimations = document.querySelectorAll('.scroll-animation');

    const handleScroll = () => {
      scrollAnimations.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimation;
