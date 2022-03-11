import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ErrorBoundary } from 'modules/errors';
import { Input, InputNumber, Switch, Radio, Space } from 'antd';
import { IconLabelButton } from 'common/IconLabelButton';

import { getCategories, getBrands } from 'sapredux/selectors';
import { applyFilters, clearFilters } from 'sapredux/actions';

const ProductsFilterPanel: React.FC = (props: any) => {
  const { categories, brands, filters, onFiltersApply, onFiltersClear } = props;
  console.log(filters);

  const handlePriceChange = (priceType: string, value: any) => {
    let newFilters: any = {};
    try {
      const val = parseFloat(value);
      if (priceType === 'fromPrice') {
        applyFilters({ fromPrice: val });
      }
    } catch (err) {
      console.log(err);
      applyFilters((newFilters[priceType] = null));
    }
  };

  return (
    <ErrorBoundary>
      <div className="">
        <div className="grid w-56 h-40 px-2 py-2 my-4 rounded-lg bg-fullwhite gap-y-1">
          <div>
            <p>Baha aralyk: </p>
          </div>
          <div className="grid">
            <Input.Group compact>
              <InputNumber
                style={{
                  width: 100,
                  textAlign: 'center',
                  height: 30,
                  borderRadius: 5,
                }}
                placeholder="Minimum"
                onChange={(value: any) => handlePriceChange('fromPrice', value)}
              />
              <InputNumber
                className="ml-1 site-input-right"
                style={{
                  width: 100,
                  textAlign: 'center',
                  height: 30,
                  borderRadius: 5,
                }}
                placeholder="Maximum"
                onChange={(value: any) => handlePriceChange('toPrice', value)}
              />
            </Input.Group>
          </div>
          <div className="grid grid-cols-iconReverse">
            <p>Arzanladysh</p>
            <Switch
              checked={filters.sort_type === 'discounts' ? true : false}
              onChange={(value: boolean) =>
                value === true && onFiltersApply({ sort_type: 'discounts' })
              }
            />
          </div>
          <div className="grid grid-cols-iconReverse">
            <p>Baha uludan kica</p>
            <Switch
              checked={filters.sort_type === 'price_high' ? true : false}
              onChange={(value: boolean) =>
                value === true && onFiltersApply({ sort_type: 'price_high' })
              }
            />
          </div>
          <div className="grid grid-cols-iconReverse">
            <p>Baha kiciden ula</p>
            <Switch
              checked={filters.sort_type === 'price_low' ? true : false}
              onChange={(value: boolean) =>
                value === true && onFiltersApply({ sort_type: 'price_low' })
              }
            />
          </div>
        </div>
        <div className="grid w-56 h-24 px-2 py-2 my-4 rounded-lg bg-fullwhite gap-y-1">
          <div className="grid grid-cols-iconReverse ">
            <p>In taze</p>
            <Switch
              checked={filters.sort_type === 'date_new' ? true : false}
              onChange={(value: boolean) =>
                value === true && onFiltersApply({ sort_type: 'date_new' })
              }
            />
          </div>
          <div className="grid grid-cols-iconReverse">
            <p>In kone</p>
            <Switch
              checked={filters.sort_type === 'date_old' ? true : false}
              onChange={(value: boolean) =>
                value === true && onFiltersApply({ sort_type: 'date_old' })
              }
            />
          </div>
          <div className="grid grid-cols-iconReverse">
            <p>Kop satylanlar</p>
            <Switch
              checked={filters.sort_type === 'rated' ? true : false}
              onChange={(value: boolean) =>
                value === true && onFiltersApply({ sort_type: 'rated' })
              }
            />
          </div>
        </div>
        <div className="w-56 px-2 py-2 my-4 rounded-lg bg-fullwhite h-80">
          <b className="relative text-base text-black bottom-1">Brands:</b>
          <br />
          <ul className="inline-block w-full h-full pl-0 overflow-y-scroll list-none max-h-60">
            <li className="flex justify-start h-6 ml-1">
              <Radio.Group>
                <Space direction="vertical" style={{ gap: '4px' }}>
                  <Radio
                    value={0}
                    onClick={() => onFiltersApply({ brand: null })}
                  >
                    Hemmesi
                  </Radio>
                  {brands.map((data: any, idx: number) => (
                    <Radio
                      value={data.id}
                      key={idx}
                      onClick={() => onFiltersApply({ brand: data.id })}
                    >
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
          <b className="relative text-base text-black bottom-1">Categories:</b>
          <br />
          <ul className="inline-block w-full h-full pl-0 overflow-y-scroll list-none max-h-60">
            <li className="flex justify-start h-6 ml-1">
              <Radio.Group buttonStyle="solid">
                <Space direction="vertical" style={{ gap: '4px' }}>
                  <Radio
                    value={0}
                    onClick={() => onFiltersApply({ category: null })}
                    checked={true}
                  >
                    Hemmesi
                  </Radio>
                  {categories.map((data: any, idx: number) => (
                    <Radio
                      value={data.id}
                      key={idx}
                      onClick={() => onFiltersApply({ category: data.id })}
                    >
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
            onClick={() => onFiltersClear()}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  brands: getBrands(state),
  categories: getCategories(state),
  filters: state.productFilter,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      onFiltersApply: applyFilters,
      onFiltersClear: clearFilters,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsFilterPanel);
