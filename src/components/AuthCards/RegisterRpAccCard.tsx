import React from 'react';
import { Form, Input, Select, Checkbox, Button, Steps } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Option } = Select;

const { Step } = Steps;

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

export const RegisterRpAccCard: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="993">+993</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      <div className="w-[510px] h-full m-auto grid grid-flow-row place-content-center auto-cols-auto place-items-center gap-6 p-8 overflow-hidden shadow-[1px_1px_4px_rgba(0,0,0,0.25)] bg-fullwhite rounded-lg">
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
            <Input className="rounded-lg min-h-32px" />
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
            name="Name"
            label="Name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
                whitespace: true,
              },
            ]}
          >
            <Input className="rounded-lg" />
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

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: 'Please select gender!' }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_: any, value: any) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="w-[60%] mt-12 mx-auto cursor-default">
        <Steps>
          <Step
            status="finish"
            title="Choose Method"
            icon={<UserOutlined className="text-textColorOrange" />}
          />
          <Step
            status="finish"
            title="Verification"
            icon={<SolutionOutlined className="text-textColorOrange" />}
          />
          <Step
            status="process"
            title="Fill the blank"
            icon={<FileTextOutlined className="text-textColorOrange" />}
          />
        </Steps>
      </div>
    </>
  );
};
