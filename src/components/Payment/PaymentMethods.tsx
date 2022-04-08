import { useState } from 'react';

import { payment_methods } from 'sapredux/services/mock_data/payment.mock';
import { transformPaymentMethod } from 'sapredux/services/transform_data';
import { ErrorBoundary } from 'modules/errors';

export const PaymentMethods = ({id, onChange}:any) => {
  const methods_list = payment_methods.data.map(transformPaymentMethod);
  const [current_method_id, set_current_method_id] = useState(id || 1);
  return (
    <ErrorBoundary>
      {methods_list.map(({ id, name, description }: any) => (
        <div
          className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine"
          onClick={() => set_current_method_id(id)}
        >
          <div className="row-span-3 p-4 m-auto">
            <input
              className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
              type="radio"
              name={id}
              checked={id === current_method_id ? true : false}
              onClick={() => {set_current_method_id(id); onChange(id)}}
            />
          </div>
          <div className="col-span-2 mx-0 my-auto">
            <h3 className="text-sm font-semibold dark:text-darkTextWhiteColor">
              {name}
            </h3>
          </div>
          <div className="col-span-2 row-span-2 dark:text-darkText">
            {description}
          </div>
        </div>
      ))}
    </ErrorBoundary>
  );
};
