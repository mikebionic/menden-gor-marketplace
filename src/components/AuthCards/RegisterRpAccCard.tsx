import { useState, useEffect } from 'react'
import { Form, Input, Select } from 'antd';

import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';
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

export const RegisterRpAccCard = ({onStageChange, validationData}:any) => {
  const {authMethod, credentials, registerToken} = validationData

  const [inputs, setInputs] = useState({
    district: 'Ashgabat',

    address: '',
    // birthDate: '',
    email: authMethod === 'email' ? credentials : '',
    name: '',
    firstName: '',
    lastName: '',
    homePhoneNumber: authMethod === 'phone_number' ? credentials : '',
    mobilePhoneNumber: authMethod === 'phone_number' ? credentials : '',
    typeId: 2,
    username: '',
    password: '',
    webAddress: authMethod === 'email' ? credentials : '',
    workFaxNumber: '',
    workPhoneNumber: '',
    zipCode: '',
  });

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === 'address'){value = `${inputs.district}, ${value}`}
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleKeyValueChange = (name:string = '', value:any = '') => {
    setInputs((inputs) => ({...inputs, [name]:value}))
  }

  useEffect(() => {
    setInputs((inputs) => ({ ...inputs, 'name': `${inputs.firstName} ${inputs.lastName}` }));
  }, [inputs.firstName, inputs.lastName])

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    console.log("myvalues ", inputs)
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <p className="w-auto px-2 text-center cursor-default">+993</p>
    </Form.Item>
  );
  return (
    <ErrorBoundary>
      <div className="w-[610px] h-full m-auto grid grid-flow-row place-content-center auto-cols-auto place-items-center gap-6 p-8 overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.25)] bg-fullwhite rounded-lg">
        <div>
					<IconLabelButton
						label="Back"
						className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)]"
						labelClassName="m-auto left-0 text-white"
						onClick={() => onStageChange(1)}
					/>
				</div>
        <div>
          <p className="text-lg font-semibold text-textColorOrange">
            Registrasiya
          </p>
        </div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          className="max-w-lg mx-auto "
        >
          <Form.Item name="Welayat" label="Welayat">
            <Select placeholder="Welayatynyzy saylan"
              name="district"
              defaultValue={inputs.district}
              onChange={(e:any) => handleKeyValueChange('district', e)}
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
            <Input className="rounded-lg border-[#E6E6E6] hover:border-textColorOrange"
              name="address"
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item name="role" label="Sowda roly"
            rules={[
              {
                required: true,
                message: 'Please select your role!',
              },
            ]}
          >
            <div className="grid grid-flow-col gap-4 auto-cols-max">
              <div className="grid grid-flow-col gap-2 auto-cols-max"
                onClick={()=>handleKeyValueChange('typeId', 2)}>
                <input
                  className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange"
                  type="radio"
                  checked={(inputs.typeId === 2) && true}
                  onChange={()=>{}}
                />
                <p>Alyjy</p>
              </div>
              <div className="grid grid-flow-col gap-2 auto-cols-max"
                onClick={()=>handleKeyValueChange('typeId', 1)}>
                <input
                  className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange"
                  type="radio"
                  checked={(inputs.typeId === 1) && true}
                  onChange={()=>{}}
                />
                <p>Satyjy</p>
              </div>
            </div>
          </Form.Item>

          <Form.Item
            name="webaddress"
            label="E-mail / Web address"
            initialValue={inputs.webAddress}
          >
            <Input
              className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange"
              name='webAddress'
              onChange={handleChange}/>
          </Form.Item>

          <Form.Item name="password" label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password className="rounded-lg" />
          </Form.Item>

          <Form.Item name="confirm" label="Confirm Password"
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
                    handleKeyValueChange('password', value)
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
            <Input.Password className="rounded-lg" />
          </Form.Item>

          <Form.Item name="firstName" label="First name"
            initialValue={inputs.firstName} >
            <Input
              className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange"
              name='firstName'
              onChange={handleChange}/>
          </Form.Item>
          <Form.Item name="lastName" label="Last name"
            initialValue={inputs.lastName} >
            <Input
              className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange"
              name='lastName'
              onChange={handleChange}/>
          </Form.Item>

          <Form.Item name="phone" label="Phone Number"
            initialValue={inputs.homePhoneNumber}
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: '100%' }}
              className="rounded-lg"
              type="number"
              name='homePhoneNumber'
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="workPhone" label="Work phone number"
            initialValue={inputs.workPhoneNumber} >
            <Input
              addonBefore={prefixSelector}
              style={{ width: '100%' }}
              className="rounded-lg"
              type="number"
              name='workPhoneNumber'
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="Fax" label="Fax"
            initialValue={inputs.workFaxNumber} >
            <Input
              style={{ width: '100%' }}
              className="rounded-lg"
              type="text"
              name='workFaxNumber'
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="zip" label="Zip"
            initialValue={inputs.zipCode} >
            <Input
              style={{ width: '100%' }}
              className="rounded-lg"
              type="text"
              name='zipCode'
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <IconLabelButton
              label="Hasaba al"
              className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
              labelClassName="m-auto text-white"
              type="submit"
            />
          </Form.Item>
        </Form>
      </div>
    </ErrorBoundary>
  );
};
