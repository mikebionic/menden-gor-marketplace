import React from 'react';

import { Form, Input } from 'antd';

import { IconLabelButton } from 'common/IconLabelButton';
import { StarRate } from 'common/StarRate';

export const ProductReview: React.FC = () => {
  return (
    <div className="grid w-full grid-flow-row gap-6 px-3 py-6 auto-rows-max">
      <h2 className="text-2xl font-semibold uppercase font-oxygen">Reviews</h2>
      <div className="grid grid-flow-col gap-8 px-8 py-12 my-8 rounded auto-cols-auto bg-fullwhite place-content-center place-items-center">
        <div className="grid grid-flow-row auto-rows-max">
          <h2 className="text-xl font-semibold font-oxygen">Mike Bionic</h2>
          <StarRate disabled={true} className="px-1" starSize="text-sm" />
        </div>
        <div>
          <p className="text-base text-justify font-oxygen">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum
            labore temporibus nulla porro ratione vel velit sapiente aperiam
            maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            illum labore temporibus nulla porro ratione vel velit sapiente
            aperiam maiores. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. At illum labore temporibus nulla porro ratione vel velit
            sapiente aperiam maiores. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At illum labore temporibus nulla porro ratione vel
            velit sapiente aperiam maiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. At illum labore temporibus nulla porro
            ratione vel velit
          </p>
        </div>
        <div>
          <p className="text-base font-bold font-oxygen">2021-04-12 16:44:07</p>
        </div>
      </div>
      <div className="grid grid-flow-row gap-2 auto-rows-max">
        <p className="text-xl font-semibold font-oxygen">Your rating</p>
        <StarRate className="px-1" starSize="text-base" />
      </div>
      <textarea
        className="font-oxygen border-[#E6E6E6] mx-1 resize-none h-56"
        placeholder="Type your message..."
      />

      <Form className="grid grid-flow-col gap-24 auto-cols-auto place-content-stretch place-items-stretch place-self-stretch">
        <Form.Item
          name="Name"
          rules={[
            {
              required: false,
              message: 'Please input your name!',
              whitespace: true,
            },
          ]}
        >
          <Input
            className="rounded-lg border-[#E6E6E6] hover:border-textColorOrange"
            placeholder="Name..."
          />
        </Form.Item>
        <Form.Item
          name="Sirname"
          rules={[
            {
              required: false,
              message: 'Please input your sirname!',
              whitespace: true,
            },
          ]}
        >
          <Input
            className="rounded-lg border-[#E6E6E6] hover:border-textColorOrange"
            placeholder="Sirname..."
          />
        </Form.Item>
      </Form>
      <div className="grid place-content-start">
        <IconLabelButton
          label="Hasaba al"
          className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
          labelClassName="m-auto text-white"
        />
      </div>
    </div>
  );
};
