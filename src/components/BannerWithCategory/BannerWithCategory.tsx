import React from 'react';
import { CarouselSlider } from 'components/Carousel';

import { CategoryListItem } from 'common/CategoryListItem'
import { CategoryList } from 'common/CategoryList'

export const BannerWithCategory: React.FC = () => {
  return (
    <div className="grid w-full h-auto gap-4 px-4 mx-auto bg-fullwhite grid-rows-auto mt-28 grid-cols-Banner sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-4 lg:pt-8">
      <CategoryList>
        <CategoryListItem label="Hello" />
      </CategoryList>
      
      <div>
        <CarouselSlider />
      </div>
    </div>
  );
};
