import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { Divider } from 'components/Divider';
// import { Spinner } from 'modules/loaders';
// import { ErrorIndicator } from 'modules/errors';
import { fetchResourceById } from 'sapredux/actions';
import { getResourceById } from 'sapredux/selectors';
import { Image } from 'common/Image';
import SlickSlider from 'common/SlickSlider';
import { ProductCard } from 'components/ProductCard';

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

  const productsList =
    resource && !!resource.related_resources ? (
      <SlickSlider settings={{slidesToShow: 3}}>
        {resource.related_resources.map((resource: any, idx: number) => (
          <ProductCard key={idx} data={resource} />
        ))}
      </SlickSlider>
    ) : null;

  const RenderProuct = ({
    description,
    name,
    image,
    priceValue,
    currencySymbol,
    categoryName,
    totBalance,
  }: any) => {
    // const  = resource
    return (
      <div className="grid gap-8 p-4 mx-auto my-8 grid-cols-VGrid w-Product h-Product bg-fullwhite place-content-center">
        <div className="bg-gray-200 w-96 h-96">
          <Image
            src={image}
            alt={`${name} - ${description}`}
            className="object-contain object-center w-full h-full lg:w-full lg:h-full"
          />
        </div>
        <div className="inline-grid grid-rows-Product place-items-stretch">
          <h1 className="py-4 text-3xl font-bold text-center text-black text-gradient">
            {name}
          </h1>
          <p className="py-1 text-xl font-medium text-black place-self-start">
            Kategoriya: {categoryName}
          </p>
          <p className="py-1 text-2xl font-medium text-black place-self-start">
            Bahasy: {priceValue} {currencySymbol}
          </p>
          <p className="py-1 text-xl font-medium text-black place-self-start">
            Sany: {totBalance}
          </p>
          <p className="py-1 text-xl font-medium text-black place-self-start">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div>
        <RenderProuct {...resource} />
        <Divider title="Similar products" />
        {productsList}
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resource: getResourceById(state.resource, state.resourcePage.id),
});

const mapDispatchToProps = {
  fetchResourceById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
