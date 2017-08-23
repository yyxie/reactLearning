import React from 'react';
import createReactClass from 'create-react-class';

import Reflux from 'reflux';

const TodoAction = Reflux.createAction({
  preEmit: function (params) {
    console.log('preEmit:' + params);
    return 324;
  },
  shouldEmit: function (params) {
    console.log('shouldEmit:' + params);
    return true;
  },
  getAll: function () {
    console.log('进入getAll');
  }
});

const TodoStore = Reflux.createStore({
  init: function () {
    this.listenTo(TodoAction, 'todo');
  },
  todo: function (params) {
    console.log('todo:' + params);
  }

});
const TodoComponent = createReactClass({
  getInitialState: function () {
    return {list: ['ggg']};
  },
  onStatusChange: function (list) {
    this.setState({list: list});
  },
  componentDidMount: function () {
    this.unsubscribe = TodoStore.listen(this.onStatusChange);
    TodoAction.getAll();
  },
  componentWillUnmount: function () {
    this.unsubscribe();
  },
  render: function () {
    return (
      <div>
        {this.state.list.map(function (item) {
          return <p>{item}</p>
        })}
      </div>
    )
  }
});
export default TodoComponent;
