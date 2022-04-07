import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { Form, Input, Select } from 'antd';

import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';
import { toJsonRpAcc } from 'sapredux/services/transform_data';
import { register_rp_acc } from 'sapredux/actions';
import { Spinner } from 'modules/loaders';
import { IoMdArrowRoundBack } from 'react-icons/io';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterRpAccCard = ({
  onStageChange,
  validationData,
  loggedIn,
  register_rp_acc,
}: any) => {
  const { authMethod, credentials, registerToken } = validationData;
  const [loading, set_loading] = useState(false);

  const navigate = useNavigate();
  loggedIn && navigate('/');

  const [inputs, setInputs] = useState({
    district: 'Ashgabat',

    address: '',
    // birthDate: '',
    email: authMethod === 'email' ? credentials : '',
    name: '',
    firstName: '',
    lastName: '',
    typeId: 2,
    username: '',
    password: '',
    phonePrefix: '+993',
    homePhoneNumber: authMethod === 'phone_number' ? credentials : '',
    mobilePhoneNumber: authMethod === 'phone_number' ? credentials : '',
    webAddress: authMethod === 'email' ? credentials : '',
    workFaxNumber: '',
    workPhoneNumber: '',
    zipCode: '',
    latitude: '',
    logitude: '',
  });

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === 'address') {
      value = `${inputs.district}, ${value}`;
    }
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleKeyValueChange = (name: string = '', value: any = '') => {
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        handleKeyValueChange('latitude', position.coords.latitude)
        handleKeyValueChange('longitude', position.coords.longitude)
        console.log("successs location ", inputs)
      });
    }
  }, [navigator.geolocation])

  useEffect(() => {
    setInputs((inputs) => ({
      ...inputs,
      name: `${inputs.firstName} ${inputs.lastName}`,
    }));
  }, [inputs.firstName, inputs.lastName]);

  const handleSubmit = async () => {
    set_loading(true);
    register_rp_acc(
      authMethod,
      registerToken,
      toJsonRpAcc(inputs, true),
      true,
      set_loading,
    );
  };

  return loading ? (
    <Spinner />
  ) : (
    <ErrorBoundary>
      <div className="w-[610px] h-full m-auto p-8 overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.25)] bg-fullwhite dark:bg-darkComponentColor rounded-lg">
        <IoMdArrowRoundBack
          className="text-xl cursor-pointer text-textColorOrange hover:opacity-80 dark:text-darkFirstColor"
          onClick={() => onStageChange(1)}
        />
        <div className="grid grid-flow-row gap-6 place-content-center auto-cols-auto place-items-center">
          <div>
            <p className="text-lg font-semibold text-textColorOrange dark:text-darkFirstColor">
              Registrasiya
            </p>
          </div>
          <Form
            {...formItemLayout}
            name="register"
            onFinish={handleSubmit}
            scrollToFirstError
            className="max-w-lg mx-auto"
          >
            <Form.Item name="Welayat" label="Welayat">
              <Select
                placeholder="Welayatynyzy saylan"
                name="district"
                defaultValue={inputs.district}
                onChange={(e: any) => handleKeyValueChange('district', e)}
              >
                <Option value="Ashgabat">Ashgabat</Option>
                <Option value="Ahal">Ahal</Option>
                <Option value="Mary">Mary</Option>
                <Option value="Lebap">Lebap</Option>
                <Option value="Dashoguz">Dashoguz</Option>
                <Option value="Balkan">Balkan</Option>
              </Select>
            </Form.Item>

            <Form.Item name="Address" label="Address">
              <Input
                className="rounded-lg border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                name="address"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item name="role" label="Sowda roly">
              <div className="grid grid-flow-col gap-4 auto-cols-max">
                <div
                  className="grid grid-flow-col gap-2 auto-cols-max"
                  onClick={() => handleKeyValueChange('typeId', 2)}
                >
                  <input
                    className="w-3 h-3 my-auto transform scale-125 cursor-pointer dark:bg-darkTextWhiteColor text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
                    type="radio"
                    checked={inputs.typeId === 2 && true}
                    onChange={() => {}}
                  />
                  <p className="text-sm text-black dark:text-darkTextWhiteColor">
                    Alyjy
                  </p>
                </div>
                <div
                  className="grid grid-flow-col gap-2 auto-cols-max"
                  onClick={() => handleKeyValueChange('typeId', 1)}
                >
                  <input
                    className="w-3 h-3 my-auto transform scale-125 cursor-pointer dark:bg-darkTextWhiteColor text-firstColorGradientFromDark dark:text-darkFirstColor focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange dark:border-darkFirstColor"
                    type="radio"
                    checked={inputs.typeId === 1 && true}
                    onChange={() => {}}
                  />
                  <p className="text-sm text-black dark:text-darkTextWhiteColor">
                    Satyjy
                  </p>
                </div>
              </div>
            </Form.Item>

            <Form.Item
              name="webaddress"
              label="E-mail / Web address"
              initialValue={inputs.webAddress}
            >
              <Input
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                name="webAddress"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password className="rounded-lg dark:bg-darkBgColor" />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }: any) => ({
                  validator(_: any, value: any) {
                    if (!value || getFieldValue('password') === value) {
                      handleKeyValueChange('password', value);
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!',
                      ),
                    );
                  },
                }),
              ]}
            >
              <Input.Password className="rounded-lg dark:bg-darkBgColor" />
            </Form.Item>

            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                name="username"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="firstName"
              label="First name"
              initialValue={inputs.firstName}
            >
              <Input
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                name="firstName"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last name"
              initialValue={inputs.lastName}
            >
              <Input
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                name="lastName"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              initialValue={inputs.homePhoneNumber}
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                style={{ width: '100%' }}
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                type="number"
                name="homePhoneNumber"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="workPhone"
              label="Work phone number"
              initialValue={inputs.workPhoneNumber}
            >
              <Input
                style={{ width: '100%' }}
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                type="number"
                name="workPhoneNumber"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="Fax"
              label="Fax"
              initialValue={inputs.workFaxNumber}
            >
              <Input
                style={{ width: '100%' }}
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                type="text"
                name="workFaxNumber"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item name="zip" label="Zip" initialValue={inputs.zipCode}>
              <Input
                style={{ width: '100%' }}
                className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange dark:bg-darkBgColor dark:border-darkBgColor dark:hover:border-darkFirstColor h-9 dark:text-darkTextWhiteColor"
                type="text"
                name="zipCode"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <IconLabelButton
                label="Hasaba al"
                className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] dark:bg-[linear-gradient(266.08deg,#6366f1_1%,#6366f1_100%)] hover:opacity-90 m-auto"
                labelClassName="m-auto text-white"
                type="primary"
                htmlType="submit"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  loggedIn: state.auth.loggedIn,
});
const mapDispatchToProps = { register_rp_acc };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRpAccCard);
