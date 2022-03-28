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

export const RegisterRpAccCard = ({onStageChange}:any) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
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
          <p className="text-lg font-semibold text-textColorOrange">
            Registrasiya
          </p>
        </div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '993',
          }}
          scrollToFirstError
          className="max-w-lg mx-auto "
        >
          <Form.Item
            name="Welayat"
            label="Welayat"
            rules={[{ required: true, message: 'Please select Welayat!' }]}
          >
            <Select placeholder="Welayatynyzy saylan">
              <Option value="Ashgabat">Ashgabat</Option>
              <Option value="Ahal">Ahal</Option>
              <Option value="Mary">Mary</Option>
              <Option value="Lebap">Lebap</Option>
              <Option value="Dashoguz">Dashoguz</Option>
              <Option value="Balkan">Balkan</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="role"
            label="Sowda roly"
            rules={[
              {
                required: true,
                message: 'Please select your role!',
              },
            ]}
          >
            <div className="grid grid-flow-col gap-4 auto-cols-max">
              <div className="grid grid-flow-col gap-2 auto-cols-max">
                <input
                  className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange"
                  type="radio"
                />
                <p>Alyjy</p>
              </div>
              <div className="grid grid-flow-col gap-2 auto-cols-max">
                <input
                  className="w-3 h-3 my-auto transform scale-125 cursor-pointer text-firstColorGradientFromDark focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent border-textColorOrange"
                  type="radio"
                />
                <p>Satyjy</p>
              </div>
            </div>
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input className="rounded-lg min-h-[32px] border-[#E6E6E6] hover:border-textColorOrange" />
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
            <Input.Password className="rounded-lg" />
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

          <Form.Item
            name="company"
            label="Company"
            rules={[
              {
                required: false,
                message: 'Please input your company name!',
                whitespace: true,
              },
            ]}
          >
            <Input className="rounded-lg border-[#E6E6E6] hover:border-textColorOrange" />
          </Form.Item>

          <Form.Item
            name="Name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
                whitespace: true,
              },
            ]}
          >
            <Input className="rounded-lg border-[#E6E6E6] hover:border-textColorOrange" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
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
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <IconLabelButton
              label="Hasaba al"
              className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
              labelClassName="m-auto text-white"
            />
          </Form.Item>
        </Form>
      </div>
    </ErrorBoundary>
  );
};
