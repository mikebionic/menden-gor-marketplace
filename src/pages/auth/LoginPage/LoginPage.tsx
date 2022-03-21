import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authActions } from 'sapredux/actions';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { routeConstants } from 'navigation/routeConstants';

const LoginPage: React.FC = (props:any) => {

  const { loggedIn, loading } = props
  const { t } = useTranslation();
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputs;
  const dispatch = useDispatch();

  if (!!loggedIn) {navigate(routeConstants.root.route)}

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
    <div className="font-sans text-gray-700">
      <div className="container flex p-12 mx-auto">
        <div className="w-full max-w-md mx-auto">
          <div className="overflow-hidden shadow-loginShadow bg-glass rounded-2xl backdrop-filter backdrop-blur-glass">
            {loading && (
              <span className="mr-1 spinner-border spinner-border-sm">
                Loading spinner :D ....
              </span>
            )}
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
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={t('auth.username')}
                  autoFocus
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  inputMode="text"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={t('auth.password')}
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a href="/" className="float-right">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item className="h-auto">
                <Button type="primary" htmlType="submit" className="w-full">
                  {t('auth.login')}
                </Button>
                <div className="mt-2">
                  Or <a href="/">register now!</a>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loggedIn: state.auth.loggedIn,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(LoginPage)
