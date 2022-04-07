import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { ErrorBoundary } from 'modules/errors';
import { Divider } from 'components/Divider';
import { fetchResourceById } from 'sapredux/actions';
import { getResourceById } from 'sapredux/selectors';
import { Image } from 'common/Image';
import SlickSlider from 'common/SlickSlider';
import { ProductAddToCart, ProductCard } from 'components/ProductCard';
import { StarRate } from 'common/StarRate';
import { PriceButton } from 'common/PriceButton';

import { ImEye } from 'react-icons/im';
import { WishlistButton } from 'common/WishlistButton';
import { ProductInfoTabs } from 'components/ProductInfoTabs';

const RenderProuct = ({
  id,
  description,
  name,
  image,
  priceValue,
  currencySymbol,
  categoryName,
  totBalance,
  realPrice,
  wishlist,
  viewCnt,
  ratingValue,
}: any) => (
  <ErrorBoundary>
    <div className="grid gap-8 p-4 mx-auto my-8 grid-cols-[auto_1fr] lg:w-[auto] h-[450px] bg-fullwhite dark:bg-darkComponentColor place-content-center place-items-center">
      <div className="bg-gray-200 dark:bg-darkBgColor lg:w-96 md:w-80 lg:h-96 md:h-80">
        <Image
          src={image}
          alt={`${name} - ${description}`}
          className="object-contain object-center w-full h-full lg:w-full lg:h-full"
        />
      </div>
      <div className="inline-grid lg:gap-2 md:gap-1 grid-flow-rows auto-rows-max place-items-stretch">
        <div>
          <h1 className="py-4 font-bold text-center text-black lg:text-3xl md:text-2xl text-gradient">
            {name}
          </h1>
          <p className="py-1 font-medium text-black lg:text-xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
            Kategoriya: {categoryName}
          </p>
          <p className="py-1 font-medium text-black lg:text-xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
            Bahasy: {priceValue} {currencySymbol}
          </p>
          <p className="py-1 font-medium text-black lg:text-xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
            Sany: {totBalance}
          </p>
          <p className="py-1 font-medium text-black lg:text-xl md:text-lg place-self-start dark:text-darkTextWhiteColor">
            {description}
          </p>
        </div>
        <div className="grid grid-flow-col gap-4 auto-cols-max">
          <StarRate className="px-0" value={ratingValue} />
          {/* <p className="text-base text-[#6B6B6B] cursor-default">
          100 Teswir
        </p> */}
          <div className="inline-grid grid-flow-col gap-1 cursor-default auto-cols-max place-content-center place-items-center dark:text-darkTextWhiteColor">
            <ImEye className="text-xl text-textColorOrange dark:text-darkFirstColor" />
            {viewCnt}
          </div>
        </div>
        <p className="text-base text-justify text-gray-400 line-through">
          {realPrice} {currencySymbol}
        </p>
        <PriceButton
          priceValue={priceValue}
          currencySymbol={currencySymbol}
          coloredButton={false}
        />
        <hr className="w-auto lg:my-4 md:my-2" />
        <div className="inline-grid grid-flow-col gap-4 auto-cols-max place-content-end place-items-center">
          <ProductAddToCart resourceId={id} withCounter={true} margin="m-0" />
          <WishlistButton wishlist={wishlist} margin="m-0" />
        </div>
      </div>
    </div>
  </ErrorBoundary>
);

const ProductPage: React.FC = (props: any) => {
  const { fetchResourceById, resource } = props;

  const params: any = useParams();
  useEffect(() => {
    try {
      fetchResourceById(parseInt(params.id));
    } catch (err: any) {
      console.log(err);
    }
  }, [params.id, fetchResourceById]);

  // let slidesToShow =
  //   resource &&
  //   resource.related_resources &&
  //   resource.related_resources.length < 5
  //     ? resource.related_resources.length
  //     : 4;

  let slidesToShow =
    window.innerWidth > 1800
      ? 6
      : window.innerWidth > 1500
      ? 5
      : window.innerWidth > 1000
      ? 4
      : window.innerWidth > 700
      ? 3
      : 2;

  const productsList =
    resource && resource.related_resources && !!resource.related_resources ? (
      <SlickSlider settings={{ slidesToShow: slidesToShow }}>
        {resource.related_resources.map((resource: any, idx: number) => (
          <ProductCard key={idx} data={resource} />
        ))}
      </SlickSlider>
    ) : null;

  return (
    <ErrorBoundary>
      <div className="py-8">
        <RenderProuct {...resource} />
        <ProductInfoTabs {...resource} />
        <Divider title="Similar products" />
        {productsList}
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resource: getResourceById(state.resource.data, state.resourcePage.id),
});

const mapDispatchToProps = {
  fetchResourceById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
