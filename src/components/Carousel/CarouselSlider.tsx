import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export const CarouselSlider: React.FC = () => {
  return (
    <Splide
      className="mb-8"
      options={{
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        lazyLoad: true,
        speed: 1500,
        arrows: 'slider',
        height: '25rem',
      }}
      hasSliderWrapper
      hasAutoplayProgress
    >
      <SplideSlide className="h-full p-carousel">
        <img
          src="https://cdn.pixabay.com/photo/2021/01/17/00/13/tiger-5923710_1280.jpg"
          alt="1"
          className="absolute w-full h-full"
        />
      </SplideSlide>
      <SplideSlide className="h-full p-carousel">
        <img
          src="https://cdn.pixabay.com/photo/2014/10/23/18/56/tiger-500118_1280.jpg"
          alt="2"
          className="absolute w-full h-full"
        />
      </SplideSlide>
      <SplideSlide className="h-full p-carousel">
        <img
          src="https://cdn.pixabay.com/photo/2019/02/08/14/11/tomcat-3983278_1280.jpg"
          alt="3"
          className="absolute w-full h-full"
        />
      </SplideSlide>
      <SplideSlide className="h-full p-carousel">
        <img
          src="https://cdn.pixabay.com/photo/2021/02/14/11/41/monkeys-6014204_1280.jpg"
          alt="4"
          className="absolute w-full h-full"
        />
      </SplideSlide>
      <SplideSlide className="h-full p-carousel">
        <img
          src="https://cdn.pixabay.com/photo/2020/12/17/07/12/cat-5838406_1280.jpg"
          alt="5"
          className="absolute w-full h-full"
        />
      </SplideSlide>
    </Splide>
  );
};

// { generateSlides().map( slide => (
//   <SplideSlide key={ slide.src }>
//     <img src={ slide.src } alt={ slide.alt }/>
//   </SplideSlide>
// ) ) }
