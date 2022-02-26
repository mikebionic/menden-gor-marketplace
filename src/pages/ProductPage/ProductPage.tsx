import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
// import { Divider } from 'components/Divider';
// import { ProductList } from 'components/ProductList';
// import { Spinner } from 'modules/loaders';
// import { ErrorIndicator } from 'modules/errors';
import { fetchResourceById } from 'sapredux/actions';
import { getResourceById } from 'sapredux/selectors'
import { Image } from 'common/Image';
import { Divider } from 'components/Divider';

const ProductPage: React.FC = (props: any, data: any) => {
  const { fetchResourceById, resource } = props

  useEffect(() => {
    try{
      fetchResourceById(parseInt(props.match.params.id))
    } catch (err:any) {
      console.log(err)
    }
  }, [])

  const renderProuct = () => {
    const {
      description,
      name,
      image,
      priceValue,
      currencyCode,
      categoryName,
      totBalance 
    } = resource
    var resource_description = description
      ? description.length > 60
        ? `${description.slice(0, 60)}...`
        : description
      : '';
    
    return (
      <div className="grid mx-auto my-8 grid-cols-VGrid w-Product h-Product bg-fullwhite place-content-center ">
        <div className="mx-8 bg-gray-200 w-96 h-96">
          <Image
            src={image}
            alt={`${name} - ${resource_description}`}
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
          <div></div>
        </div>
      </div>
    )
  }


  return (
    <ErrorBoundary>
      <div>
        {resource && renderProuct()}
        <Divider title="Similar products" />
        {/* {productsList} */}
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resource: getResourceById(state.resource.data, state.resourcePage.id)
});

const mapDispatchToProps = {
  fetchResourceById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductPage);
