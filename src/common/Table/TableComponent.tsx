import React from 'react';
import { Table, Form, Space } from 'antd';
import noimage from 'common/images/noimage.png';

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: 'Quantity',
    align: 'center',
    dataIndex: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    align: 'center',
    className: 'text-gray-500',
  },
  {
    title: 'Total Price',
    align: 'center',
    dataIndex: 'total',
  },
  {
    title: 'Currency',
    align: 'center',
    dataIndex: 'currency',
  },
];

const data: any = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'CRAFERS - DELUXE MILK CHOCOLATE ( PEACH & VANILLA )',
    quantity: '2.0',
    price: `${i * 10}`,
    total: `${i * 20}`,
    currency: `TMT`,
  });
}

export class TableComponent extends React.Component {
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
