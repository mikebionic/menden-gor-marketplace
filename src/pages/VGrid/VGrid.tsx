import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchResources } from 'sapredux/actions';
import { getResources } from 'sapredux/selectors';

import { ErrorBoundary } from 'modules/errors';
import { ProductList } from 'components/ProductList';
import { ErrorIndicator } from 'modules/errors';
import { Spinner } from 'modules/loaders';

import { Input, Switch, Radio, Space } from 'antd';
import { IconLabelButton } from 'common/IconLabelButton';

import { getCategories, getBrands } from 'sapredux/selectors';

const VGrid: React.FC = (props: any) => {
  const {
    fetchResources,
    resources,
    resource_loading,
    resource_error,
    categories,
    brands,
  } = props;

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
      <div className="grid pb-8 text-base grid-cols-VGrid">
        {/* first column */}
        <div className="">
          <div className="grid w-56 h-40 px-2 py-2 my-4 rounded-lg bg-fullwhite gap-y-1">
            <div>
              <p>Baha aralyk: </p>
            </div>
            <div className="grid">
              <Input.Group compact>
                <Input
                  style={{
                    width: 100,
                    textAlign: 'center',
                    height: 30,
                    borderRadius: 5,
                  }}
                  placeholder="Minimum"
                />
                <Input
                  className="ml-1 site-input-right"
                  style={{
                    width: 100,
                    textAlign: 'center',
                    height: 30,
                    borderRadius: 5,
                  }}
                  placeholder="Maximum"
                />
              </Input.Group>
            </div>
            <div className="grid grid-cols-iconReverse">
              <p>Arzanladysh</p>
              <Switch defaultChecked onChange={undefined} />
            </div>
            <div className="grid grid-cols-iconReverse">
              <p>Baha uludan kica</p>
              <Switch defaultChecked onChange={undefined} />
            </div>
            <div className="grid grid-cols-iconReverse">
              <p>Baha kiciden ula</p>
              <Switch defaultChecked onChange={undefined} />
            </div>
          </div>
          <div className="grid w-56 h-24 px-2 py-2 my-4 rounded-lg bg-fullwhite gap-y-1">
            <div className="grid grid-cols-iconReverse ">
              <p>In taze</p>
              <Switch defaultChecked onChange={undefined} />
            </div>
            <div className="grid grid-cols-iconReverse">
              <p>In kone</p>
              <Switch defaultChecked onChange={undefined} />
            </div>
            <div className="grid grid-cols-iconReverse">
              <p>Kop satylanlar</p>
              <Switch defaultChecked onChange={undefined} />
            </div>
          </div>
          <div className="w-56 px-2 py-2 my-4 rounded-lg bg-fullwhite h-80">
            <b className="relative text-base text-black bottom-1">Brands:</b>
            <br />
            <ul className="inline-block w-full h-full pl-0 overflow-y-scroll list-none max-h-60">
              <li className="flex justify-start h-6 ml-1">
                <Radio.Group>
                  <Space direction="vertical" style={{ gap: '4px' }}>
                    {brands.map((data: any, idx: number) => (
                      <Radio value={data.id} key={idx}>
                        {data.name}
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </li>
            </ul>
            {/* <a href="/" className="">
              <div className="relative mt-4 text-base font-bold text-center text-black border-t border-gray-200 border-solid cursor-pointer -top-2">
                Others
              </div>
            </a> */}
          </div>
          <div className="w-56 px-2 py-2 my-4 rounded-lg bg-fullwhite h-80">
            <b className="relative text-base text-black bottom-1">
              Categories:
            </b>
            <br />
            <ul className="inline-block w-full h-full pl-0 overflow-y-scroll list-none max-h-60">
              <li className="flex justify-start h-6 ml-1">
                <Radio.Group>
                  <Space direction="vertical" style={{ gap: '4px' }}>
                    {categories.map((data: any, idx: number) => (
                      <Radio value={data.id} key={idx}>
                        {data.name}
                      </Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </li>
            </ul>
            {/* <a href="/" className="">
              <div className="relative mt-4 text-base font-bold text-center text-black border-t border-gray-200 border-solid cursor-pointer -top-2">
                Others
              </div>
            </a> */}
          </div>
          <div className="inline-grid w-56 grid-cols-2 rounded-lg h-9">
            <IconLabelButton
              className="w-24 mx-auto my-0 rounded-full bg-gradientSecondColor"
              label="Search"
            />
            <IconLabelButton
              className="w-24 mx-auto my-0 rounded-full bg-gradientFirstColor"
              label="Clear"
            />
          </div>
        </div>
        {/* second column */}
        <div className="gap-4 ml-4 ">{productsList}</div>
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  resources: getResources(state),
  resource_loading: state.resource.loading,
  resource_error: state.resource.error,
  brands: getBrands(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchResources,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VGrid));
