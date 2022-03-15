import React from 'react';
import { Tabs } from 'antd';
import { ProfilePage } from 'pages/ProfilePage';
import { OrderLine, Orders } from 'pages/Orders';
import { WishlistPage } from 'pages/Wishlist';
import { ProfileEdit } from 'pages/ProfileEdit';

const { TabPane } = Tabs;

export const Tab: React.FC = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" type="line" size="small" animated={true}>
        <TabPane tab="Profile" key="1">
          <ProfilePage />
        </TabPane>
        <TabPane tab="Orders" key="2">
          {/* <Orders /> */}
          <OrderLine />
        </TabPane>
        <TabPane tab="Wishlist" key="3">
          <WishlistPage />
        </TabPane>
        <TabPane tab="Profile edit" key="4">
          <ProfileEdit />
        </TabPane>
      </Tabs>
    </div>
  );
};
