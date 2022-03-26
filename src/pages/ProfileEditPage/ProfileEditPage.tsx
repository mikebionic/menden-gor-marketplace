import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getCurrentUserInfo } from 'sapredux/selectors';
import { Image } from 'common/Image';
import { ErrorBoundary } from 'modules/errors';
import { authService as service } from 'sapredux/services';
import { showToastMessage } from 'sapredux/helpers';
import { toJsonRpAcc } from 'sapredux/services/transform_data';

const post_editProfile = async (payload: any) => {
  await service.editProfile(payload).then(
    (response: any) =>
      showToastMessage({ type: 'success', message: response.message }),
    (error: any) => showToastMessage({ type: 'error', message: error }),
  );
};
const onSave = (data: any) => post_editProfile(toJsonRpAcc(data));

const ProfileEditPage: React.FC = ({ current_user }: any) => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-2 gap-8 p-4 text-start grid-rows-[1fr_max-content_max-content_max-content_max-content_max-content]">
        <div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-[1fr_max-content_max-content_auto]">
          <div className="relative m-auto cursor-pointer">
            <div className="absolute grid grid-flow-row rounded-full hover:opacity-70 opacity-60 hover:bg-gray-50 bg-gray-50 w-36 h-36 left-1 bottom-1 auto-cols-max place-items-center place-content-center">
              <PlusOutlined
                className="uploadPhoto"
                style={{ fontSize: '30px' }}
              />
            </div>
            <Image
              className="object-cover m-auto avatar"
              src={current_user.image}
              alt={current_user.username}
              imageType='avatar'
            />
          </div>
          <small className="text-center">
            Hasaba alnan senesi: {current_user.createdDate}
          </small>
          <Button type="ghost" shape="round">
            Save
          </Button>
        </div>
        <div className="inline-grid gap-2">
          <b>Ulanyjy ady</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.username}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>Öý telefony</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.homePhoneNumber}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>Salgy</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.address}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>Poçta kody</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.zipCode}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>Doly ady</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.name}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>El telefony</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.mobilePhoneNumber}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>Iş telefony</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.workPhoneNumber}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>Web salgysy</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.webAddress}
          />
        </div>
        <div className="inline-grid gap-2">
          <b>Faks</b>
          <Input
            className="w-11/12 inputProfileEdit"
            value={current_user.workFaxNumber}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  current_user: getCurrentUserInfo(state.auth),
});

export default connect(mapStateToProps)(ProfileEditPage);
