import React from 'react';
import {Util} from 'component';

import {siteType} from '../config/config.jsx';
import BtnListAction from '../actions/Wrapper.js';

const config = BtnListAction.config

//自动跳转到/list名单
const listDict = ['/room-hub/distribute/', '/config/product/', '/config/', '/organization/employee/', '/apartment/centeralization/',
  "/apartment/resources/", "/property/homeOwner/"];


function checkSite() {
  let site = localStorage[common.site];

  if (site && site == siteType)
    return true;
  else
    return false;
}

function renderFuncDefault(names) {
  return names.join("-");
}


export const getModule = (loader, exportName = 'default', btnList, refresh = false) => (nextState, cb) => loader(module => {
  btnList && config(btnList, __MASTER__, refresh);
  cb(null, module[exportName])
});

export const getNameByQueryString = qName => () => {
  if (common.__location) {
    return common.__location.query[qName] || "无"
  }
  return ''
};
export const getNamesByQueryString = (qNames, renderFunc = renderFuncDefault) => () => {
  let arr = [];

  if (common.__location) {

    qNames.forEach(item => {

      if (common.__location.query[item]) {

        arr.push(common.__location.query[item]);

      }

    });

    return renderFunc(arr)
  }
  return ''
};

export const getPropertyNavName = (defaultMsg = "") => () => {
  let navName = defaultMsg;

  if (common.__location && common.__location.query['id'] != "-1") {
    navName = common.__location.query['name'];
  }

  return <span className="nav-name">{navName}</span>
};

export default {
  requireAuth(nextState, replace) {
    console.info('Auth. Next transition path:', nextState.location.pathname);
    let isSignin = common.checkSignin(common.baseInfo.cookieName);

    let currentStaff = common.getStaff(false);

    if (isSignin == false || currentStaff == false || checkSite() == false) {
      //replace("/signin");
    }
    else {
      //pass

      if ($.inArray(nextState.location.pathname, listDict) >= 0) {
        replace(`${nextState.location.pathname}list`);
      }
    }
  },
  getDynamicName() {
    return this.component.displayName;
  }
}
