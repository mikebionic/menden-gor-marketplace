import React, { useState } from 'react';
import { CarouselSlider } from 'components/Carousel';

import { FaGooglePlay } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export const Banner: React.FC = () => {
  // const [style, setStyle] = useState({ display: 'none' });
  return (
    <div className="grid w-full h-auto gap-4 px-4 mx-auto bg-fullwhite grid-rows-auto mt-28 grid-cols-Banner sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-4 lg:pt-8">
      {/* first col */}
      <div>
        <div>
          <h1 className="py-2 mb-2 text-base font-semibold border-b border-gray-400">
            Marketplace
          </h1>
        </div>
        <div className="overflow-auto h-BannerCategory max-h-BannerCategory">
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
            {/* <div
              style={{
                border: '1px solid gray',
                width: 300,
                height: 300,
                padding: 10,
                margin: 100,
              }}
              onMouseEnter={(e) => {
                setStyle({ display: 'block' });
              }}
              onMouseLeave={(e) => {
                setStyle({ display: 'none' });
              }}
            >
              <button style={style}>Click</button>
            </div> */}
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
          <button className="inline-grid items-center w-full cursor-pointer hover:relative hover:shadow-BannerCategory hover:text-socialBarItemHover bg-fullwhite grid-cols-search h-11">
            <FaGooglePlay className="ml-2" />
            <h4 className="ml-4 text-left">Elektronika</h4>
            <MdOutlineKeyboardArrowRight className="mr-2" />
          </button>
        </div>
      </div>
      {/* second col */}
      <div>
        <CarouselSlider />
      </div>
    </div>
  );
};
