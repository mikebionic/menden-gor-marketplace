import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { Button } from 'antd';
import { getCurrentUserInfo } from 'sapredux/selectors';
import { Image } from 'common/Image';
import { ErrorBoundary, ErrorIndicator } from 'modules/errors';

const ProfilePage: React.FC = ({ current_user }: any) => {
  return !R.isEmpty(current_user) ? (
    <ErrorBoundary>
      <div className="grid grid-cols-2 p-4 gap-8 text-center grid-rows-[1fr_max-content_max-content_max-content_max-content_max-content]">
        <div className="inline-grid col-start-1 col-end-3 gap-2 mx-auto grid-rows-[1fr_max-content_max-content_auto]">
          <Image
            className="object-cover m-auto avatar"
            src={current_user.image}
            alt={current_user.username}
            imageType="avatar"
          />
          <span className="text-center text-black dark:text-darkTextWhiteColor">
            {current_user.name}
          </span>
          <small className="text-center text-black dark:text-darkTextWhiteColor">
            Hasaba alnan senesi: {current_user.createdDate}
          </small>
          <Button
            type="ghost"
            shape="round"
            className="text-black dark:text-darkTextWhiteColor dark:hover:text-darkFirstColor dark:hover:border-darkFirstColor"
          >
            Change password
          </Button>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Ulanyjy ady</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.username}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">E-poçta</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.email ?? 'Email not registered'}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">El telefony</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.mobilePhoneNumber ?? 'Phone number not specified'}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Salgy</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.address ?? 'Address not specified'}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Poçta kody</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.zipCode ?? 'Zip code not registered'}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Doly ady</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.name ?? ''}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Öý telefony</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.homePhoneNumber ?? ''}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Iş telefony</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.workPhoneNumber ?? ''}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Web salgysy</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.webAddress ?? ''}
          </p>
        </div>
        <div className="inline-grid gap-2">
          <b className="text-black dark:text-darkTextWhiteColor">Faks</b>
          <p className="text-gray-400 dark:text-darkText">
            {current_user.workFaxNumber ?? ''}
          </p>
        </div>
      </div>
    </ErrorBoundary>
  ) : (
    <ErrorIndicator />
  );
};

const mapStateToProps = (state: any) => ({
  current_user: getCurrentUserInfo(state.auth),
});

export default connect(mapStateToProps)(ProfilePage);
