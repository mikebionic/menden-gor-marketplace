import React from 'react';
import noimage from 'common/images/noimage.png';
import { Button } from 'antd';

export const Profile: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 text-center grid-rows-Profile">
      <div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-Avatar">
        <img className="m-auto avatar" src={noimage} alt="" />
        <span className="text-center">Full Name</span>
        <small className="text-center">Hasaba alnan senesi: 25-01-2022</small>
        <Button type="ghost" shape="round">
          Change password
        </Button>
      </div>
      <div className="inline-grid gap-2">
        <b>Ulanyjy ady</b>
        <p className="text-gray-400">merri23</p>
      </div>
      <div className="inline-grid gap-2">
        <b>E-poçta</b>
        <p className="text-gray-400">mekanhodzaberdiev@gmail.com</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Öý telefony</b>
        <p className="text-gray-400">+99332321312</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Salgy</b>
        <p className="text-gray-400">Sap cozgut IT company</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Poçta kody</b>
        <p className="text-gray-400">14400</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Doly ady</b>
        <p className="text-gray-400">merri23</p>
      </div>
      <div className="inline-grid gap-2">
        <b>El telefony</b>
        <p className="text-gray-400">+9933213123</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Iş telefony</b>
        <p className="text-gray-400">+9933213123</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Web salgysy</b>
        <p className="text-gray-400">www.saphasap.com</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Faks</b>
        <p className="text-gray-400">merri23</p>
      </div>
    </div>
  );
};
