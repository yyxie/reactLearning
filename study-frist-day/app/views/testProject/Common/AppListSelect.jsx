/**
 * Created by yhkang on 2017/3/23.
 *
 */

import React, {Component} from 'react'
import {ServerSelectNew} from 'businessComponent'
import objectAssign from 'object-assign';

export default class AppListSelect extends Component {

  fetch = (params) => {
    this.refs.brand.fetch(params);
  }

  render() {
    const {server = {}, optionProps, ...allProps} = this.props;

    const defaultServer = {
      params: {},
      isPage: false,
      reqMethod: 'post',
      url: '/app/software/query/combox',
      failedMsg: "获取应用程序失败！",
    };
    debugger;
    return (
      <ServerSelectNew
        ref="brand"
        server={objectAssign(defaultServer, server)}
        placeholder="应用程序"
        alphabetFilter={false}
        optionProps={{
          value: 'id',
          child: function (item) {
            return item.appName + "(" + item.appType + ")";
          }
        }}
        allOption={false}
        autoLoad={true}
        allowClear={true}
        {...allProps}
      />
    )
  }
}
