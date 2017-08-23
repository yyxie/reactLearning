import React from 'react';
import createReactClass from 'create-react-class';
import List from './list.jsx';
import Detail from './detail.jsx';

const Child = createReactClass({
  actionForward(){
    // 对应Router 中／：**的**
    const action = this.props.params.action,
          queryString = this.props.location.query; //获取URL后面跟着的参数值
    let showView = null;
    if (action === 'list') {
      return <List />;
    } else if (action === 'detail') {
      return <Detail id={queryString.id}/>;
    }
    return showView;
  },
  render(){

    return (
      <div>
        <div style={{width: '200px', float: 'left', background: '#eee', height: '100px'}}>菜单</div>

        {this.actionForward()}
      </div>
    )
  }
})

export default Child;
