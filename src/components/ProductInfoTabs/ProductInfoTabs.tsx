import React from 'react';
import { Tabs } from 'antd';
import { ProductDesc, ProductReview } from 'components/ProductInfoTabs';

const { TabPane } = Tabs;

export const ProductInfoTabs: React.FC = (props:any) => {
  return (
    <Tabs defaultActiveKey="1" animated={true} centered className="my-8">
      <TabPane tab="Description" key="1">
        <ProductDesc {...props} />
      </TabPane>
      <TabPane tab="Review" key="2">
        <ProductReview resId={props.id} reviews={props.reviews}/>
      </TabPane>
    </Tabs>
  );
};
