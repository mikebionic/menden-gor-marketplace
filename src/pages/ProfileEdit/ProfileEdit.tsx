import React from 'react';
import noimage from 'common/images/noimage.png';
import { Button } from 'antd';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const ProfileEdit: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 p-4 text-start grid-rows-Profile">
      <div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-Avatar">
        <div className="relative m-auto cursor-pointer">
          <PlusOutlined
            className="absolute left-40 bottom-40 uploadPhoto"
            style={{ fontSize: '30px' }}
          />
          <img className="m-auto avatar" src={noimage} alt="" />
        </div>
        <small className="text-center">Hasaba alnan senesi: 25-01-2022</small>
        <Button type="ghost" shape="round">
          Save
        </Button>
      </div>
      <div className="inline-grid gap-2">
        <b>Ulanyjy ady</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>Öý telefony</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>Salgy</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>Poçta kody</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>Doly ady</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>El telefony</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>Iş telefony</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>Web salgysy</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
      <div className="inline-grid gap-2">
        <b>Faks</b>
        <Input className="w-11/12 inputProfileEdit" />
      </div>
    </div>
  );
};
