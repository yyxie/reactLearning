import Reflux from 'reflux';
import ListActions from '../actions/listAction.jsx';

const ListStore = Reflux.createStore({
  init: function () {
    // this.listenTo(ListActions, 'onSearchHandleSuccess');
    // this.listenTo(ListActions, 'onSearchHandleFailed');

  },
  items: [],
  listenables: [ListActions],
  //store 中不进行请求数据，只对数据进行处理，比如数据请求后的success 和fail
  onSearchHandle: function (obj) {
    // debugger;
    // const params = {
    //   softName: obj.softName,
    //   pageSize: 10,
    //   page: 1,
    //   isPage: 1,
    // };
    // const url = '';
    // common.ajax(url, params, 'POST', 'json', true, this.success, this.failed);
  },
  setListState: function (key, value){
    ListStore[key] = value;
    this.trigger(ListStore[key]);
  },
  onSearchHandleSuccess: function (result) {
    this.items = result.data.list;
    this.trigger(this.items);
    console.log(result);
  },
  onSearchHandleFailed: function () {
    console.log('失败')
  }
});

export default ListStore;
