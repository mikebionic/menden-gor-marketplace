import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getCurrentUserInfo } from 'sapredux/selectors';
import { Image } from 'common/Image'

const ProfileEditPage: React.FC = ({current_user}:any) => {
  return (
    <div className="grid grid-cols-2 gap-8 p-4 text-start grid-rows-Profile">
      <div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-Avatar">
        <div className="relative m-auto cursor-pointer">
          <PlusOutlined
            className="absolute left-40 bottom-40 uploadPhoto"
            style={{ fontSize: '30px' }}
          />
          <Image className="m-auto avatar object-cover"
            src={current_user.image}
            alt={current_user.username} />
        </div>
        <small className="text-center">Hasaba alnan senesi: { current_user.createdDate }</small>
        <Button type="ghost" shape="round">
          Save
        </Button>
      </div>
      <div className="inline-grid gap-2">
        <b>Ulanyjy ady</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.username}/>
      </div>
      <div className="inline-grid gap-2">
        <b>Öý telefony</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.homePhoneNumber}/>
      </div>
      <div className="inline-grid gap-2">
        <b>Salgy</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.address}/>
      </div>
      <div className="inline-grid gap-2">
        <b>Poçta kody</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.zipCode}/>
      </div>
      <div className="inline-grid gap-2">
        <b>Doly ady</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.name}/>
      </div>
      <div className="inline-grid gap-2">
        <b>El telefony</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.mobilePhoneNumber}/>
      </div>
      <div className="inline-grid gap-2">
        <b>Iş telefony</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.workPhoneNumber}/>
      </div>
      <div className="inline-grid gap-2">
        <b>Web salgysy</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.webAddress}/>
      </div>
      <div className="inline-grid gap-2">
        <b>Faks</b>
        <Input className="w-11/12 inputProfileEdit" value={current_user.workFaxNumber}/>
      </div>
    </div>
  );
};


const mapStateToProps = (state: any) => ({
  current_user: getCurrentUserInfo(state.auth)
});

export default connect(mapStateToProps)(ProfileEditPage)