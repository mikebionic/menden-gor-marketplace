import { useState } from 'react';
import { Table, Form, Space } from 'antd';

import { Image } from 'common/Image';

const columns = [
  {
    title: 'Image',
    align: 'center',
    dataIndex: 'image',
    render: (image: string) => (
      <Image src={image} alt={image} className="object-cover w-16 m-auto" />
    ),
  },
  {
    title: 'Product Name',
    align: 'center',
    dataIndex: 'name',
  },
  {
    title: 'Amount',
    align: 'center',
    dataIndex: 'orderLineAmount',
  },
  {
    title: 'Price',
    align: 'center',
    dataIndex: 'orderLinePrice',
    className: 'text-gray-500',
  },
  {
    title: 'Total Price',
    align: 'center',
    dataIndex: 'orderLineFTotal',
  },
  {
    title: 'Currency',
    align: 'center',
    dataIndex: 'currencySymbol',
  },
];

export const OrderLinesTable = ({ data }: any) => {
  const order_lines = data.map((item: any, idx: number) => ({
    ...item,
    key: idx,
    name: item.resource.name,
    image: item.resource.image,
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

  const handleYScrollChange = (enable: any) => {
    set_table_config({ ...table_config, yScroll: enable });
  };

  const handleXScrollChange = (e: any) => {
    set_table_config({ ...table_config, xScroll: e.target.value });
  };

  const { xScroll, yScroll, ...state }: any = table_config;

  const scroll: any = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }

  const tableColumns: any = columns.map((item) => ({
    ...item,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  return (
    <>
      <Form
        layout="inline"
        className="shadow-loginShadow components-table-demo-control-bar"
        style={{ marginBottom: 16 }}
      ></Form>
      <Table
        {...table_config}
        columns={tableColumns}
        dataSource={state.hasData ? order_lines : null}
        scroll={scroll}
      />
    </>
  );
};
