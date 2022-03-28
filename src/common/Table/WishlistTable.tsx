import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Form, Space } from 'antd';

import { Image } from 'common/Image';
import { routeConstants } from 'navigation/routeConstants';
import { WishlistButton } from 'common/WishlistButton';

const columns = [
  {
    title: 'Image',
    align: 'center',
    render: ({ id, name, image }: any) => (
      <Link to={`${routeConstants.product.route}${id}/${name}`}>
        <Image src={image} alt={name} className="object-cover w-16 m-auto" />
      </Link>
    ),
  },
  {
    title: 'Description',
    align: 'center',
    render: (data: any) => (
      <Space size="small" className="grid grid-rows-3 text-left text-gray-500">
        <p>
          Name:{' '}
          <Link to={`${routeConstants.product.route}${data.id}/${data.name}`}>
            {data.name}
          </Link>
        </p>
        <p>
          Category:{' '}
          <Link
            to={`${routeConstants.vGrid.route}?category=${data.categoryId}&`}
          >
            {data.categoryName}
          </Link>
        </p>
        <p>Barcode: {data.barcodeValue}</p>
      </Space>
    ),
  },
  {
    title: 'Price',
    align: 'center',
    className: 'text-gray-500',
    render: ({ priceValue, currencySymbol, id, wishlist }: any) => (
      <>
        <p>{priceValue} {currencySymbol}</p>
        <WishlistButton resId={id} wishlist={wishlist}/>
      </>
    ),
  },
  // {
  //   title: 'Action',
  //   align: 'center',
  //   render: () => (
  //     <Space size="middle">
  //       <button>Add to Cart</button>
  //       <button>wishlist</button>
  //     </Space>
  //   ),
  // },
];

export const WishlistTable = ({ data }: any) => {
  const wishlist_data = data.map((item: any, idx: number) => ({
    ...item,
    key: idx,
  }));

  const [table_config, set_table_config]: any = useState({
    bordered: false,
    loading: false,
    size: 'default',
    title: undefined,
    showHeader: true,
    footer: false,
    rowSelection: false,
    hasData: true,
    tableLayout: undefined,
    pagination: false,
    xScroll: false,
  });

  const tableColumns: any = columns.map((item) => ({ ...item }));

  return (
    <>
      <Form
        layout="inline"
        className="shadow-defaultShadow components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      ></Form>
      <Table
        {...table_config}
        columns={tableColumns}
        dataSource={table_config.hasData ? wishlist_data : null}
      />
    </>
  );
};
