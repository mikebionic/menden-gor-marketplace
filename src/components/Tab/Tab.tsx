import React from 'react';
import { Tabs } from 'antd';
import { Profile } from 'pages/Profile';
import { OrderLine, Orders } from 'pages/Orders';
import { Wishlist } from 'pages/Wishlist';
import { ProfileEdit } from 'pages/ProfileEdit';

const { TabPane } = Tabs;

export const Tab: React.FC = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card" size="small" animated={true}>
        <TabPane tab="Profile" key="1">
          <Profile />
        </TabPane>
        <TabPane tab="Orders" key="2">
          {/* <Orders /> */}
          <OrderLine />
        </TabPane>
        <TabPane tab="Wishlist" key="3">
          <Wishlist />
        </TabPane>
        <TabPane tab="Profile edit" key="4">
          <ProfileEdit />
        </TabPane>
      </Tabs>
    </div>
  );
};
