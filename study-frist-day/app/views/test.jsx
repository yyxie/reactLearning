import React from 'react';
import createReactClass from 'create-react-class';

import Reflux from 'reflux';

const Test = createReactClass({
  render: function () {
    return (
      <div>
        <ChildTest/>
        test
      </div>
    );
  }
});
/* 组件命名必须为首字母大写*/
const ChildTest = createReactClass({
  render: function () {
    return (
      <div style={{color: 'red', marginLeft: '100px'}}>wrwrs</div>
    )
  }
})

export default Test;
