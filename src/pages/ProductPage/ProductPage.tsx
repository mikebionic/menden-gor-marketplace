import React, { useEffect } from 'react';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { Divider } from 'components/Divider';
import { ProductList } from 'components/ProductList';
import { Spinner } from 'modules/loaders';
import { ErrorIndicator } from 'modules/errors';
import { withRouter } from 'react-router';
import { fetchResources } from 'sapredux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getResources } from 'sapredux/selectors';
import { Image } from 'common/Image';

const ProductPage: React.FC = (props: any, data: any) => {
  const { fetchResources, resources, resource_loading, resource_error } = props;
  const { name, description, priceValue, currencyCode, image, isNew } = data;

  var resource_description = description
    ? description.length > 60
      ? `${description.slice(0, 60)}...`
      : description
    : '';

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const productsList =
    !resource_loading && !resource_error ? (
      <ProductList data={resources} />
    ) : resource_loading && !resource_error ? (
      <Spinner />
    ) : (
      <ErrorIndicator />
    );

  return (
    <ErrorBoundary>
      <div>
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
              Evy Baby (5 Junior)
            </h1>
            <p className="py-1 text-2xl font-medium text-black place-self-start">
              Kategoriya: Podguznik
            </p>
            <p className="py-1 text-2xl font-medium text-black place-self-start">
              Agramy:11-25 kg
            </p>
            <p className="py-1 text-2xl font-medium text-black place-self-start">
              Sany: 48 sany
            </p>
            <p className="py-1 text-2xl font-medium text-black place-self-start">
              Öndürilen ýeri: Russiya
            </p>
            <div></div>
          </div>
        </div>
        <Divider />
        {productsList}
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resources: getResources(state),
  resource_loading: state.resource.loading,
  resource_error: state.resource.error,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchResources,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProductPage));
