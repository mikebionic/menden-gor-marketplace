import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'

import { ErrorBoundary } from 'modules/errors';
import { Input, InputNumber, Switch } from 'antd';
import { IconLabelButton } from 'common/IconLabelButton';

import { getCategories, getBrands } from 'sapredux/selectors';
import { applyFilters, clearFilters } from 'sapredux/actions';

const ProductsFilterPanel: React.FC = (props: any) => {
  const { categories, brands, filters, onFiltersApply, onFiltersClear } = props;

  const navigate = useNavigate()
  const location = useLocation()

  const handlePriceChange = (priceType: string, value: any) => {
    try {
      const val = parseFloat(value);
      if (priceType === 'fromPrice') {
        onFiltersApply({ fromPrice: val });
      } else {
        onFiltersApply({ toPrice: val });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onNavigate = () => {
    let search_querystring = `?`
    Object.keys(filters).map((key) => {
      if (filters[key]) {
        search_querystring += `${key}=${filters[key]}&`;
      }
    });
    navigate(`${location.pathname}${search_querystring}`)
  }

  return (
    <ErrorBoundary>
      <div>
        <div className="grid w-56 h-40 px-2 py-2 my-4 rounded-lg bg-fullwhite gap-y-1">
          <b className="relative text-base text-black bottom-1">Filters:</b>
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
                value={filters.fromPrice}
                onChange={(value: any) => handlePriceChange('fromPrice', value)}
                status="warning"
                type="number"
              />
              {/* !!!TODO: Merri, this (type="number") creates a form around input */}
              <InputNumber
                className="ml-1 site-input-right"
                style={{
                  width: 100,
                  textAlign: 'center',
                  height: 30,
                  borderRadius: 5,
                }}
                placeholder="Maximum"
                value={filters.toPrice}
                onChange={(value: any) => handlePriceChange('toPrice', value)}
                status="warning"
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
        </div>

        <div className="grid w-56 h-60 px-2 py-2 my-4 rounded-lg bg-fullwhite gap-y-1">
          <b className="relative text-base text-black bottom-1">Sort:</b>
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
            <li className="h-full pl-2">
              <label className="flex my-1 cursor-pointer">
                <input
                  className="w-3 h-3 my-auto transform scale-125 text-gradientFirstColor active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                  type="radio"
                  name="radio-brand-null"
                  onChange={() => onFiltersApply({ brand: null })}
                  checked={filters.brand === null ? true : false}
                />
                <p className="px-2 text-sm">Hemmesi</p>
              </label>
              {brands.map((data: any, idx: number) => (
                <label className="flex my-1 cursor-pointer" key={idx}>
                  <input
                    className="w-3 h-3 my-auto transform scale-125 outline-none text-gradientFirstColor form-radio active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                    type="radio"
                    name={`radio-brand-${data.name}-${data.id}`}
                    value={data.id}
                    key={idx}
                    onChange={() => onFiltersApply({ brand: data.id })}
                    checked={parseInt(filters.brand) === parseInt(data.id) ? true : false}
                  />
                  <p className="px-2 text-sm">{data.name}</p>
                </label>
              ))}
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
            <li className="h-full pl-2">
              <label className="flex my-1 cursor-pointer">
                <input
                  className="w-3 h-3 my-auto transform scale-125 text-gradientFirstColor active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                  type="radio"
                  name="radio-category-null"
                  onChange={() => onFiltersApply({ category: null })}
                  checked={filters.category === null ? true : false}
                />
                <p className="px-2 text-sm">Hemmesi</p>
              </label>
              {categories.map((data: any, idx: number) => (
                <label className="flex my-1 cursor-pointer" key={idx}>
                  <input
                    className="w-3 h-3 my-auto transform scale-125 outline-none text-gradientFirstColor form-radio active:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent"
                    type="radio"
                    name={`radio-category-${data.name}-${data.id}`}
                    value={data.id}
                    onChange={() => onFiltersApply({ category: data.id })}
                    checked={parseInt(filters.category) === parseInt(data.id) ? true : false}
                  />
                  <p className="px-2 text-sm">{data.name}</p>
                </label>
              ))}
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
            onClick={() => onNavigate()}
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
