import { Badge, Progress } from 'antd';
import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';

import { BsCurrencyDollar } from 'react-icons/bs';

export const OrderBlock = (props: any) => {
  const {
    orderFTotal,
    currencySymbol,
    regNo,
    orderDate,
    statusName,
    status_ui,
  } = props;

  return (
    <ErrorBoundary>
      <div className="relative grid w-[380px] m-4 bg-white cursor-pointer h-52 shadow-defaultShadow rounded-xl">
        <Badge.Ribbon
          text={`${orderFTotal}${currencySymbol}`}
          color="red"
          placement="end"
          className="mt-1"
        >
          <div className="inline-grid w-full h-full grid-flow-row gap-3 p-4 mt-2 auto-rows-max">
            <p className="text-base font-semibold font-oxygen">Order-{regNo}</p>
            <div className="grid grid-flow-col gap-2 grid-cols-[70%_30%]">
              <Progress
                percent={status_ui.percentage}
                status="exeption"
                strokeColor={status_ui.hash_colors}
                showInfo={false}
              />
              <IconLabelButton
                className="w-6 h-5"
                icon={<status_ui.icon className="w-full h-full" />}
              />
            </div>
            <div className="inline-grid grid-flow-col auto-cols-[50%_50%]">
              <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
                <div className="row-span-3 p-4 m-auto">
                  <IconLabelButton
                    className="w-6 h-5"
                    icon={<status_ui.icon className="w-full h-full" />}
                  />
                </div>
                <div className="col-span-2 mx-0 my-auto">
                  <h3 className="text-sm font-semibold">Status</h3>
                </div>
                <div className="col-span-2 row-span-2">
                  <IconLabelButton
                    label={statusName}
                    className={`px-2 text-white bg-${status_ui.tailwind_hash} rounded`}
                  />
                </div>
              </div>
              <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
                <div className="row-span-3 p-4 m-auto">
                  <IconLabelButton
                    className="w-6 h-5"
                    icon={<BsCurrencyDollar className="w-full h-full" />}
                  />
                </div>
                <div className="col-span-2 mx-0 my-auto">
                  <h3 className="text-sm font-semibold">Total</h3>
                </div>
                <div className="col-span-2 row-span-2">
                  <p>
                    {orderFTotal} {currencySymbol}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-right font-oxygen">Date: {orderDate}</p>
          </div>
        </Badge.Ribbon>
      </div>
    </ErrorBoundary>
  );
};
