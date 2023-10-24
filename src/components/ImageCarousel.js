import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={images[activeIndex]} alt={` ${activeIndex + 1}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;
