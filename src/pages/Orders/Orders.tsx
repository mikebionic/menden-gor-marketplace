import React from 'react';
import { Badge, Progress } from 'antd';

export const Orders: React.FC = () => {
  return (
    <div className="relative grid mx-4 my-4 bg-white cursor-pointer w-ResGroup h-52 shadow-ResGroupShadow rounded-xl">
      <Badge.Ribbon text="9102TMT" color="red" placement="end" className="mt-1">
        <div className="inline-grid w-full h-full gap-3 p-4 mt-2">
          <p className="text-base font-semibold">Order-PWSSFK703210136</p>
          <Progress
            percent={70}
            status="active"
            strokeColor="rgba(254, 159, 118)"
            showInfo={false}
          />
        </div>
      </Badge.Ribbon>
      <Badge.Ribbon
        text="Waiting"
        color="orange"
        placement="start"
      ></Badge.Ribbon>
    </div>
  );
};
