import React from 'react';
import { Table, Form, Space } from 'antd';
import noimage from 'common/images/noimage.png';

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    align: 'center',
  },
  {
    title: 'Description',
    align: 'center',
    render: () => (
      <Space size="small" className="grid grid-rows-3 text-left">
        <p>Name: CRAFERS - DELUXE MILK CHOCOLATE ( PEACH & VANILLA )</p>
        <p>Category: CRAFERS</p>
        <p>Barcode: 4780059600807</p>
      </Space>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    align: 'center',
  },
  {
    title: 'Action',
    align: 'center',
    render: () => (
      <Space size="middle">
        <button>Add to Cart</button>
        <button>wishlist</button>
      </Space>
    ),
  },
];

const data: any = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    image: <img src={noimage} alt="" className="w-24 m-auto" />,
    price: `${i}2 TMT`,
  });
}

export class Wishlist extends React.Component {
  state: any = {
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
  };

  handleYScrollChange = (enable: any) => {
    this.setState({ yScroll: enable });
  };

  handleXScrollChange = (e: any) => {
    this.setState({ xScroll: e.target.value });
  };

  render() {
    const { xScroll, yScroll, ...state }: any = this.state;

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
          {...this.state}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
        />
      </>
    );
  }
}
