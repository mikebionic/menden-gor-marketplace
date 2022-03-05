import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { Divider } from 'components/Divider';
import { ProductList } from 'components/ProductList';
// import { Spinner } from 'modules/loaders';
// import { ErrorIndicator } from 'modules/errors';
import { fetchResourceById } from 'sapredux/actions';
import { getResourceById } from 'sapredux/selectors'
import { Image } from 'common/Image';

const ProductPage: React.FC = (props: any) => {
  const { fetchResourceById, resource } = props

  useEffect(() => {
    try{
      fetchResourceById(parseInt(props.match.params.id))
    } catch (err:any) {
      console.log(err)
    }
  }, [props.match.params.id, fetchResourceById])

  const productsList =
    resource && !!resource.related_resources ? (
      <ProductList data={resource.related_resources} />
    ) : null

  const RenderProuct = ({
    description,
    name,
    image,
    priceValue,
    currencyCode,
    categoryName,
    totBalance 
  }:any) => {
    // const  = resource
    return (
      <div className="grid mx-auto my-8 grid-cols-VGrid w-Product h-Product bg-fullwhite place-content-center ">
        <div className="mx-8 bg-gray-200 w-96 h-96">
          <Image
            src={image}
            alt={`${name} - ${description}`}
            className="object-cover object-center w-full h-full lg:w-full lg:h-full"
          />
        </div>
        <div className="inline-grid grid-rows-Product place-items-stretch">
          <h1 className="py-4 text-3xl font-bold text-center text-black text-gradient">
            {name}
          </h1>
          <p className="py-1 text-2xl font-medium text-black place-self-start">
            Kategoriya: {categoryName}
          </p>
          <p className="py-1 text-2xl font-medium text-black place-self-start">
            Bahasy: {priceValue} {currencyCode}
          </p>
          <p className="py-1 text-2xl font-medium text-black place-self-start">
            Sany: {totBalance}
          </p>
          <p className="py-1 text-2xl font-medium text-black place-self-start">
            {description}
          </p>
        </div>
      </div>
    )
  }


  return (
    <ErrorBoundary>
      <div>
        <RenderProuct {...resource} />
        <Divider title="Similar products" />
        { productsList }
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resource: getResourceById(state.resource, state.resourcePage.id)
});

const mapDispatchToProps = {
  fetchResourceById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);