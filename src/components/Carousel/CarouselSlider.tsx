import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Image } from 'common/Image'

const carouselSlide = {
  mobileView: '',
  // mt-2
  desktopView: '',
  // mt-16
};

const classes =
  window.innerWidth < 768
    ? carouselSlide.mobileView
    : carouselSlide.desktopView;

export const CarouselSlider = ({images}:any) => {
  return (
    <Splide
      className={`mb-8 ${classes}`}
      options={{
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        lazyLoad: true,
        speed: 4000,
        arrows: 'slider',
        height: '25rem',
      }}
      hasSliderWrapper
      hasAutoplayProgress
    >
      {images.map((image:any, idx:number) => {
        <SplideSlide className="h-full p-carousel" key={idx}>
          <Image src={image.filePathM}
            alt={image.title}
            className="absolute w-full h-full" />
        </SplideSlide>
      })}
    </Splide>
  );
};