import React from 'react';

import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

import NestedForm from './NestedForm';
import NestedFormWithState from './NestedFormWithState';

export default React.createClass({
  render(){
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="数据绑定(State)" key="1"><NestedFormWithState/></TabPane>
        <TabPane tab="数据绑定(Field)" key="2"><NestedForm/></TabPane>
      </Tabs>
    )
  }
})
