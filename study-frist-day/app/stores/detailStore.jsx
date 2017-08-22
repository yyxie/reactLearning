import Reflux from 'reflux';
import DetailActions from '../actions/detailAction.jsx';

const DetailStore = Reflux.createStore({
  init: function () {
    // this.listenTo(ListActions, 'onSearchHandleSuccess');
    // this.listenTo(ListActions, 'onSearchHandleFailed');

  },
  obj: {},
  listenables: [DetailActions],
  onSaveHandleSuccess: function (result) {
    this.obj = result.data.list;
    this.trigger(this.obj);
    console.log(result);
  },
  onSaveHandleFailed: function () {
    console.log('失败')
  },
  onGetByIdSuccess: function (result) {
    debugger;
    this.obj = result.data;
    this.trigger(this.obj);
    console.log(result);

  },
  onGetByIdFailed: function () {
    console.log('失败');
  }
});

export default DetailStore;
