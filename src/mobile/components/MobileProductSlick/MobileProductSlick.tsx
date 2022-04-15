import React from 'react'
import SlickSlider from 'common/SlickSlider';
import { MobileProductCard } from 'mobile/components/MobileProductCard';

interface IPropsProductList {
  data?: any;
}
const MobileProductSlick: React.FC<IPropsProductList> = ({
  data
}) => (
    <SlickSlider>
      {data.map((product: any, idx: number) => (
        <MobileProductCard {...product} key={idx} />
      ))}
    </SlickSlider>
  );

export default MobileProductSlick;
