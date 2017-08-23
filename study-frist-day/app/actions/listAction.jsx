import React from 'react';
import Reflux from 'reflux';

const ListActions = Reflux.createActions({
  'searchHandle': {children: ['completed', 'failed']},
  preEmit: function (params) {
    console.log('preEmit:' + params);
  },
  shouldEmit: function (params) {
    console.log('shouldEmit:' + params);
  }
});

ListActions.searchHandle.listen(function (params) {
  let url = "/saas20/api/2017072701/Ipower/free/app/version/query";
  //common.ajax(url, params, 'POST', 'json', true, this.success, this.failed);
   this.promise(common.ajaxPromise(url, params, 'POST', 'json', false));
})

export default ListActions;
