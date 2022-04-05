import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { authActions } from 'sapredux/actions';
import { routeConstants } from 'navigation';
import { ErrorBoundary } from 'modules/errors';
import { IconLabelButton } from 'common/IconLabelButton';
import { Spinner } from 'modules/loaders';

const LoginPage: React.FC = (props: any) => {
  const { loggedIn, loading } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputs;
  const dispatch = useDispatch();

  if (!!loggedIn) {
    navigate(routeConstants.root.route);
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    if (username && password) {
      dispatch(authActions.login(username, password));
    }
  };

  return (
    <ErrorBoundary>
      <div className="font-sans text-gray-700">
        <div className="container flex p-12 mx-auto">
          <div className="w-full max-w-md mx-auto">
            <div className="overflow-hidden shadow-defaultShadow bg-glass rounded-2xl backdrop-filter backdrop-blur-glass">
              { loading && <Spinner /> }
              <Form
                name="normal_login"
                className="max-w-full p-8"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                method="GET"
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: 'Please input your Username!' },
                  ]}
                >
                  <Input
                    prefix={
                      <UserOutlined className="pr-2 site-form-item-icon" />
                    }
                    placeholder={t('auth.username')}
                    autoFocus
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    inputMode="text"
                    className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your Password!' },
                  ]}
                >
                  <Input
                    prefix={
                      <LockOutlined className="pr-2 site-form-item-icon" />
                    }
                    type="password"
                    placeholder={t('auth.password')}
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange"
                  />
                </Form.Item>
                <Form.Item>
                  <div className="grid grid-flow-col gap-2 auto-cols-max place-items-center">
                    <input
                      name="remember"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 cursor-pointer text-textColorOrange focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent"
                    />
                    <p className="cursor-default">Remember me</p>
                  </div>

                  <a
                    href="/"
                    className="float-right hover:text-textColorOrange"
                  >
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item className="h-auto">
                  <IconLabelButton
                    label={t('auth.login')}
                    className="h-11 rounded-lg w-full bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
                    labelClassName="m-auto text-white"
                    type="primary"
                    htmlType="submit"
                  />
                  <div className="mt-2">
                    Or{' '}
                    <a href="/" className="hover:text-textColorOrange">
                      register now!
                    </a>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  loggedIn: state.auth.loggedIn,
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(LoginPage);
