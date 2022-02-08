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

const VGrid: React.FC = (props: any) => {
  const { fetchResources, resources, resource_loading, resource_error } = props;

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
      <div className="grid pb-8 grid-cols-VGrid">
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
            <div className="grid grid-cols-iconReverse">
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
                    <Radio value={1}>Option A</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                    <Radio value={4}>Option A</Radio>
                    <Radio value={5}>Option B</Radio>
                    <Radio value={6}>Option C</Radio>
                    <Radio value={7}>Option A</Radio>
                    <Radio value={8}>Option B</Radio>
                    <Radio value={9}>Option C</Radio>
                    <Radio value={10}>Option A</Radio>
                    <Radio value={11}>Option B</Radio>
                    <Radio value={12}>Option C</Radio>
                    <Radio value={13}>Option A</Radio>
                    <Radio value={14}>Option B</Radio>
                    <Radio value={15}>Option C</Radio>
                    <Radio value={16}>Option A</Radio>
                    <Radio value={17}>Option B</Radio>
                    <Radio value={18}>Option C</Radio>
                    <Radio value={19}>Option A</Radio>
                    <Radio value={20}>Option B</Radio>
                    <Radio value={21}>Option C</Radio>
                  </Space>
                </Radio.Group>
              </li>
            </ul>
            <a href="/" className="">
              <div className="relative mt-4 text-base font-bold text-center text-black border-t border-gray-200 border-solid cursor-pointer -top-2">
                Others
              </div>
            </a>
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
                    <Radio value={1}>Option A</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                    <Radio value={4}>Option A</Radio>
                    <Radio value={5}>Option B</Radio>
                    <Radio value={6}>Option C</Radio>
                    <Radio value={7}>Option A</Radio>
                    <Radio value={8}>Option B</Radio>
                    <Radio value={9}>Option C</Radio>
                    <Radio value={10}>Option A</Radio>
                    <Radio value={11}>Option B</Radio>
                    <Radio value={12}>Option C</Radio>
                    <Radio value={13}>Option A</Radio>
                    <Radio value={14}>Option B</Radio>
                    <Radio value={15}>Option C</Radio>
                    <Radio value={16}>Option A</Radio>
                    <Radio value={17}>Option B</Radio>
                    <Radio value={18}>Option C</Radio>
                    <Radio value={19}>Option A</Radio>
                    <Radio value={20}>Option B</Radio>
                    <Radio value={21}>Option C</Radio>
                  </Space>
                </Radio.Group>
              </li>
            </ul>
            <a href="/" className="">
              <div className="relative mt-4 text-base font-bold text-center text-black border-t border-gray-200 border-solid cursor-pointer -top-2">
                Others
              </div>
            </a>
          </div>
          <div className="w-56 rounded-lg h-9 bg-fullwhite"></div>
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
