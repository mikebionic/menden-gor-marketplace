import * as R from 'ramda';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { OrderLine, OrderBlock } from 'pages/OrdersPage';
import { orderService } from 'sapredux/services';
import { routeConstants } from 'navigation/routeConstants';
import { Spinner } from 'modules/loaders';

export const OrdersPage: React.FC = () => {
  const [loading, set_loading] = useState(true);
  const [order_invoices_list, set_order_invoices_list] = useState([]);
  const get_order_invoices = async () => {
    set_loading(true);
    const order_invoices_list = await orderService.fetchAll_data();
    order_invoices_list && set_order_invoices_list(order_invoices_list);
    set_loading(false);
  };

  const location = useLocation();
  const [current_order_inv, set_current_order_inv] = useState({});
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const regNo = params.get('regNo');
    const inv_data =
      regNo && R.find(R.propEq('regNo', regNo), order_invoices_list);
    inv_data ? set_current_order_inv(inv_data) : set_current_order_inv({});
  }, [location.search, order_invoices_list]);

  useEffect(() => {
    get_order_invoices();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!R.isEmpty(current_order_inv) ? (
        <div>
          <OrderLine {...current_order_inv} />
        </div>
      ) : (
        <div className="grid grid-cols-3">
          {order_invoices_list.map((order_inv: any, idx: number) => (
            <Link
              to={`${routeConstants.orders.route}?regNo=${order_inv.regNo}`}
              key={idx}
              className="hover:text-black"
            >
              <OrderBlock {...order_inv} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
