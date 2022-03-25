import { Progress } from 'antd';
import { OrderLinesTable } from 'common/Table';
import { IconLabelButton } from 'common/IconLabelButton';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const OrderLine = (props: any) => {
  const {
    regNo,
    orderDate,
    orderFTotal,
    currencySymbol,
    orderDesc,
    statusName,
    status_ui,
    order_inv_lines,
  } = props;
  return (
    <div className="grid w-11/12 h-auto gap-4 p-6 mx-auto my-4 bg-white cursor-default shadow-ResGroupShadow rounded-xl">
      <div className="inline-grid grid-cols-2">
        <h3 className="text-2xl font-semibold">Sargyt-{regNo}</h3>
        <Progress
          percent={status_ui.percentage}
          status="active"
          strokeColor={status_ui.color_hash}
          showInfo={false}
        />
      </div>
      <div className="inline-grid grid-cols-3">
        <div className="grid grid-flow-col gap-1 grid-rows-OrderLine grid-cols-OrderLine">
          <div className="row-span-3 p-4 m-auto">
            <IconLabelButton icon={status_ui.icon} />
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
        <div className="grid grid-flow-col gap-1 grid-rows-OrderLine grid-cols-OrderLine">
          <div className="row-span-3 p-4 m-auto">
            <IconLabelButton icon={status_ui.icon} />
          </div>
          <div className="col-span-2 mx-0 my-auto">
            <h3 className="text-sm font-semibold">Order date</h3>
          </div>
          <div className="col-span-2 row-span-2">
            <p>{orderDate}</p>
          </div>
        </div>
        <div className="grid grid-flow-col gap-1 grid-rows-OrderLine grid-cols-OrderLine">
          <div className="row-span-3 p-4 m-auto">
            <IconLabelButton icon={status_ui.icon} />
          </div>
          <div className="col-span-2 mx-0 my-auto">
            <h3 className="text-sm font-semibold">Total</h3>
          </div>
          <div className="col-span-2 row-span-2">
            <p className="text-sm font-semibold">
              {orderFTotal} {currencySymbol}
            </p>
          </div>
        </div>
      </div>
      <div>
        <OrderLinesTable data={order_inv_lines} />
      </div>
      <div>
        <p className="text-base font-semibold">Bellik:</p>
        <p>{orderDesc}</p>
      </div>
    </div>
  );
};
