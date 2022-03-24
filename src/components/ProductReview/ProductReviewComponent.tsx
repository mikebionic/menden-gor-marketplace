import React from 'react';
import { Tabs } from 'antd';
import { ProductDesc } from './ProductDesc';
import { ProductReview } from './ProductReview';

const { TabPane } = Tabs;

export const ProductReviewComponent: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" animated={true} centered className="my-8">
      <TabPane tab="Description" key="1">
        <ProductDesc />
      </TabPane>
      <TabPane tab="Review" key="2">
        <ProductReview />
      </TabPane>
    </Tabs>
  );
};
