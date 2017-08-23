import React from 'react';
import Reflux from 'reflux';

const DetailActions = Reflux.createActions({
  'saveHandle': {children: ['success', 'failed']},
  'getById': {children: ['success', 'failed']},
  preEmit: function (params) {
    console.log('preEmit:' + params);
  },
  shouldEmit: function (params) {
    console.log('shouldEmit:' + params);
  }
});

DetailActions.saveHandle.listen(function (params) {
  let url = "/saas20/api/2017081001/Ipower/free/app/version/save";
  common.ajax(url, params, 'POST', 'json', true, this.success, this.failed);
});
DetailActions.getById.listen(function (params) {
  let url = "/saas20/api/2017081001/Ipower/free/app/version/details";
  common.ajax(url, params, 'POST', 'json', true, this.success, this.failed);
});
export default DetailActions;
