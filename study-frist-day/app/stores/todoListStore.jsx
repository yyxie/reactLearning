import Reflux from 'reflux';
import TodoActions from '../actions/todoListAction.jsx';

const TodoStore = Reflux.createStore({
  items: [],
  listenables: [TodoActions],
  onAddItem: function (model) {
    this.items.push(model);
    this.trigger(this.items);
  }
});

export default TodoStore;
