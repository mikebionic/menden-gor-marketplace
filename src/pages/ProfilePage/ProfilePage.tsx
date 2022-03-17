import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';
import { getCurrentUserInfo } from 'sapredux/selectors/auth.selector';
import { Image } from 'common/Image'

const ProfilePage: React.FC = ({current_user}:any) => {
  return current_user ? (
    <div className="grid grid-cols-2 gap-8 text-center grid-rows-Profile">
      <div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-Avatar">
        <Image className="m-auto avatar object-cover"
          src={current_user.FilePathS}
          alt={current_user.RpAccUName} />
        <span className="text-center">{current_user.RpAccName}</span>
        <small className="text-center">Hasaba alnan senesi: {current_user.CreatedDate}</small>
        <Button type="ghost" shape="round">
          Change password
        </Button>
      </div>
      <div className="inline-grid gap-2">
        <b>Ulanyjy ady</b>
        <p className="text-gray-400">{current_user.RpAccUName}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>E-poçta</b>
        <p className="text-gray-400">{current_user.RpAccEMail ?? "Email not registered"}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>El telefony</b>
        <p className="text-gray-400">{current_user.RpAccMobilePhoneNumber ?? "Phone number not specified"}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Salgy</b>
        <p className="text-gray-400">{current_user.RpAccAddress ?? "Address not specified"}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Poçta kody</b>
        <p className="text-gray-400">{current_user.RpAccPostalCode ?? "Email not registered"}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Doly ady</b>
        <p className="text-gray-400">{current_user.RpAccName ?? ""}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Öý telefony</b>
        <p className="text-gray-400">{current_user.RpAccHomePhoneNumber ?? ""}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Iş telefony</b>
        <p className="text-gray-400">{current_user.RpAccWorkPhoneNumber ?? ""}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Web salgysy</b>
        <p className="text-gray-400">{current_user.RpAccWebAddress ?? ""}</p>
      </div>
      <div className="inline-grid gap-2">
        <b>Faks</b>
        <p className="text-gray-400">{current_user.RpAccWorkFaxNumber ?? ""}</p>
      </div>
    </div>
  )
  : null
};


const mapStateToProps = (state: any) => ({
  current_user: getCurrentUserInfo(state.auth)
});

export default connect(
  mapStateToProps,
  null,
)(ProfilePage)