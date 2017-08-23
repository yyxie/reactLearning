import React from 'react';
import Reflux from 'reflux';

import {Util} from 'component';

import ResourcesList from './ResourcesList.jsx';
import ResourcesInfo from './ResourcesInfo.jsx';

import './style.css';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    const staffInfo = common.getStaff();

    return {
      pageList: {
        totalCount: 0,
        totalPage: 0,
        currentPage: 1,
        list: []
      },
      orgId: staffInfo.orgId
    };
  },
  onStatusChange(data){
    this.setState(data);
  },
  returnToList(){
    Util.push("/apartment/resources/list");
  },
  refresh(id){
    // this.context.router.push({
    //     pathname: "/apartment/resources/edit",
    //     query: {id}
    // });
    Util.push("/apartment/resources/edit", {id});

  },
  toggleActionView(){
    const action = this.props.params.action, queryString = this.props.location.query;

    let showView = null;

    switch (action) {
      case "list":
        showView = <ResourcesList orgId={this.state.orgId} pageList={this.state.pageList}/>;
        break;
      case "add":
        showView =
          <ResourcesInfo orgId={this.state.orgId} action="add" onClose={this.returnToList} onRefresh={this.refresh}/>;
        break;
      case "edit":
        showView = (
          <ResourcesInfo
            action="edit"
            orgId={this.state.orgId}
            id={queryString.id}
            onClose={this.returnToList}
            onRefresh={this.refresh}
            detail={this.state.detail}
          />
        );
        break;
      // no default
    }

    return showView;
  },
  render(){

    return (
      <div>
        {this.toggleActionView()}
      </div>
    )
  }
});
