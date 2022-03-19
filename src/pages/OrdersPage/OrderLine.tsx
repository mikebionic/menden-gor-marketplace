import React from 'react';
import { Progress } from 'antd';
import { TableComponent } from 'common/Table';
import { IconLabelButton } from 'common/IconLabelButton';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const OrderLine: React.FC = () => {
  return (
    <div className="grid w-11/12 h-auto gap-4 p-6 mx-auto my-4 bg-white cursor-default shadow-ResGroupShadow rounded-xl">
      <div className="inline-grid grid-cols-2">
        <h3 className="text-2xl font-semibold">Sargyt-PWSSFK703210136</h3>
        <Progress
          percent={70}
          status="active"
          strokeColor="rgba(254, 159, 118)"
          showInfo={false}
        />
      </div>
      <div className="inline-grid grid-cols-3">
        <div className="grid grid-flow-col gap-1 grid-rows-OrderLine grid-cols-OrderLine">
          <div className="row-span-3 p-4 m-auto">
            <IconLabelButton icon={<AiOutlineLoading3Quarters />} />
          </div>
          <div className="col-span-2 mx-0 my-auto">
            <h3 className="text-sm font-semibold">Status</h3>
          </div>
          <div className="col-span-2 row-span-2">
            <IconLabelButton
              label="Waiting"
              className="px-3 text-white bg-yellow-500 rounded"
            />
          </div>
        </div>
        <div className="grid grid-flow-col gap-1 grid-rows-OrderLine grid-cols-OrderLine">
          <div className="row-span-3 p-4 m-auto">
            <IconLabelButton icon={<AiOutlineLoading3Quarters />} />
          </div>
          <div className="col-span-2 mx-0 my-auto">
            <h3 className="text-sm font-semibold">Order data</h3>
          </div>
          <div className="col-span-2 row-span-2">
            <p>2022-02-22 12:00:05</p>
          </div>
        </div>
        <div className="grid grid-flow-col gap-1 grid-rows-OrderLine grid-cols-OrderLine">
          <div className="row-span-3 p-4 m-auto">
            <IconLabelButton icon={<AiOutlineLoading3Quarters />} />
          </div>
          <div className="col-span-2 mx-0 my-auto">
            <h3 className="text-sm font-semibold">Total</h3>
          </div>
          <div className="col-span-2 row-span-2">
            <p className="text-sm font-semibold">2583.76 TMT</p>
          </div>
        </div>
      </div>
      <div>
        <TableComponent />
      </div>
      <div>
        <p className="text-base font-semibold">Bellik:</p>
        <p>test</p>
      </div>
    </div>
  );
};
