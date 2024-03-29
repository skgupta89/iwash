
'use client';
import React,{useState,useEffect} from 'react';

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      'https://5.imimg.com/data5/HC/DQ/MY-9005253/car-wash-chemicals-500x500.jpg',
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1044123806.jpg',

    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div className=''>
    <div className=" w-full">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
    </div>

  )
}

export default CustomSlider;