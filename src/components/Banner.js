import React, { useState, useEffect, useRef } from "react";
import { BannerImage, StyledSlider} from "./BannerImage";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = ({ banners }) => {
  //create hook to set the current index of the image and move to previous
  const [imageValue, setImageValue] = useState(0);
  // count image
  const length = banners.length;
  //console.log(length);
  const delay = 5000;

  const count = useRef(0);
  
  const resetTimeout = () => {
    if (count.current) {
      clearTimeout(count.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    count.current = setTimeout( () => setImageValue((prevIndex) => prevIndex === length - 1 ? 0 : prevIndex + 1),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [imageValue]);

  const leftArrow = () => {
    setImageValue(imageValue === length - 1 ? 0 : imageValue + 1);
  };

  const rightArrow = () => {
    setImageValue(imageValue === 0 ? length - 1 : imageValue - 1);
  };
  
  return (
    <StyledSlider>
      <FaChevronLeft className="leftArrow" onClick={leftArrow} />
      <FaChevronRight className="rightArrow" onClick={rightArrow} />
      {banners.map((banner, index) => {
        return (
          <div key={index}>
            {index === imageValue && <BannerImage src={banner.image} alt="" />}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default Banner;
