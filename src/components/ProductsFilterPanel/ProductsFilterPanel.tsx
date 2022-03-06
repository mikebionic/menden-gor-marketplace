import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ErrorBoundary } from "modules/errors";
import { Input, Switch, Radio, Space } from 'antd';
import { IconLabelButton } from 'common/IconLabelButton';

import { getCategories, getBrands } from 'sapredux/selectors';

const ProductsFilterPanel: React.FC = (props: any) => {
	const {
		categories,
		brands,
	} = props;

	return (
		<ErrorBoundary>
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
		</ErrorBoundary>
	)
}


// const mapStateToProps = (state: any, props: any) => {
// 	const { resourceId } = props;
//   const totalData = getTotalCount(state, resourceId)
//   return {
//     totalCount: totalData.totalCount,
//     totalPrice: totalData.totalPrice,
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators({
//     onIncrease: resourceAddedToCart,
//     onDecrease: resourceRemovedFromCart,
//     onDelete: resourceAllRemovedFromCart
//   }, dispatch);
// }

// export default connect( 
//   mapStateToProps,
//   mapDispatchToProps,
// )(ProductsFilterPanel);



// ###################
const mapStateToProps = (state: any) => ({
  brands: getBrands(state),
  categories: getCategories(state),
});

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators(
//     {
//       fetchResources,
//     },
//     dispatch,
//   );
// };

export default connect(mapStateToProps, null)(ProductsFilterPanel);
