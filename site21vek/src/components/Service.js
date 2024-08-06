import React, { useState, useRef, useEffect } from 'react';

const Service = ({ name, price }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`service fade-in ${isVisible ? 'visible' : ''}`}>
      <h3><em>{name}</em></h3>
      <p><strong>{price}₽</strong></p>
    </div>
  );
};

export default Service;
