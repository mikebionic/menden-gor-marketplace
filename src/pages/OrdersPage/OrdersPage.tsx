import React, { useState, useEffect } from 'react';

import { Badge, Progress } from 'antd';
// import { OrderLine } from 'pages/OrdersPage';

import { orderService } from 'sapredux/services'

export const OrdersPage: React.FC = () => {

  const [order_invoices_list, set_order_invoices_list] = useState([])
  const get_order_invoices = async() => {
    const order_invoices_list = await orderService.fetchAll_data()
    order_invoices_list && set_order_invoices_list(order_invoices_list)
  }

  useEffect(() => {
    get_order_invoices();
  }, []);

  return (
    <>
      {order_invoices_list.map((order_inv:any, idx:number) => 
        <div key={idx} className="relative grid mx-4 my-4 bg-white cursor-pointer w-ResGroup h-52 shadow-ResGroupShadow rounded-xl">
          <Badge.Ribbon text={`${order_inv.orderFTotal}${order_inv.currencySymbol}`} color="red" placement="end" className="mt-1">
            <div className="inline-grid w-full h-full gap-3 p-4 mt-2">
              <p className="text-base font-semibold">{`Order-${order_inv.regNo}`}</p>
              <Progress
                percent={70}
                status="active"
                strokeColor="rgba(254, 159, 118)"
                showInfo={false}
              />
            </div>
          </Badge.Ribbon>
          <p>{order_inv.orderDesc}</p>
          <p>Date: {order_inv.orderDate}</p>
          <Badge.Ribbon
            text={order_inv.statusName}
            color="orange"
            placement="start"
          ></Badge.Ribbon> 
        </div>
      )}
    </>     
  );
};
