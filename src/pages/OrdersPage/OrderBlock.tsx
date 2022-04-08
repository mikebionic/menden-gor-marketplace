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
      <div className="relative grid xl:w-[380px] md:w-[320px] m-4 bg-white dark:bg-darkComponentColor cursor-pointer h-52 shadow-defaultShadow rounded-xl">
        <Badge.Ribbon
          text={`${orderFTotal}${currencySymbol}`}
          color="red"
          placement="end"
          className="mt-1"
        >
          <div className="inline-grid w-full h-full grid-flow-row gap-3 p-4 mt-2 auto-rows-max">
            <p className="text-base font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
              Order-{regNo}
            </p>
            <div className="grid grid-flow-col gap-2 grid-cols-[70%_30%]">
              <Progress
                percent={status_ui.percentage}
                status="exeption"
                strokeColor={status_ui.hash_colors}
                showInfo={false}
                className="dark:opacity-80"
              />
              <IconLabelButton
                className="w-6 h-5"
                icon={
                  <status_ui.icon className="w-full h-full text-black dark:text-darkTextWhiteColor" />
                }
              />
            </div>
            <div className="inline-grid grid-flow-col gap-4 auto-cols-[50%_50%]">
              <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
                <div className="row-span-3 p-4 m-auto">
                  <IconLabelButton
                    className="w-6 h-5"
                    icon={
                      <status_ui.icon className="w-full h-full text-black dark:text-darkTextWhiteColor" />
                    }
                  />
                </div>
                <div className="col-span-2 mx-0 my-auto">
                  <h3 className="text-sm font-semibold text-black dark:text-darkTextWhiteColor">
                    Status
                  </h3>
                </div>
                <div className="col-span-2 row-span-2">
                  <IconLabelButton
                    label={statusName}
                    className={`px-0 text-white bg-${status_ui.tailwind_hash} rounded`}
                    labelClassName="px-0 text-black dark:text-darkText"
                  />
                </div>
              </div>
              <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
                <div className="row-span-3 p-4 m-auto">
                  <IconLabelButton
                    className="w-6 h-5"
                    icon={
                      <BsCurrencyDollar className="w-full h-full text-black dark:text-darkTextWhiteColor" />
                    }
                  />
                </div>
                <div className="col-span-2 mx-0 my-auto">
                  <h3 className="text-sm font-semibold text-black dark:text-darkTextWhiteColor">
                    Total
                  </h3>
                </div>
                <div className="col-span-2 row-span-2">
                  <p className="text-black dark:text-darkText">
                    {orderFTotal} {currencySymbol}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-right text-black font-oxygen dark:text-darkText">
              Date: {orderDate}
            </p>
          </div>
        </Badge.Ribbon>
      </div>
    </ErrorBoundary>
  );
};
