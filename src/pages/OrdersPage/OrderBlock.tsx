import { Badge, Progress } from 'antd';
import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors'

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
      <div className="relative grid w-[380px] m-4 bg-white cursor-pointer h-52 shadow-ResGroupShadow rounded-xl">
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
                status="active"
                strokeColor={status_ui.color_hash}
                showInfo={false}
              />
              <IconLabelButton icon={<status_ui.icon />} />
            </div>
            <div className="inline-grid grid-flow-col auto-cols-[50%_50%]">
              <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
                <div className="row-span-3 p-4 m-auto">
                  <IconLabelButton icon={<status_ui.icon />} />
                </div>
                <div className="col-span-2 mx-0 my-auto">
                  <h3 className="text-sm font-semibold">Status</h3>
                </div>
                <div className="col-span-2 row-span-2">
                  <IconLabelButton
                    label={statusName}
                    className={`px-3 text-white bg-[${status_ui.color_hash}] rounded`}
                  />
                </div>
              </div>
              <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
                <div className="row-span-3 p-4 m-auto">
                  <IconLabelButton icon={<status_ui.icon />} />
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
