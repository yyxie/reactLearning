import React from 'react';
import createReactClass from 'create-react-class';
import Reflux from 'reflux';
import {Input, Button} from 'antd';
import {Link} from 'react-router';
import Clipboard from "clipboard";
import ListAction from '../../actions/listAction.jsx';
import ListStore from '../../stores/listStore.jsx';
import FilterBox from './FilterBox.jsx';

import {MessageNew, BootstrapTable, TableFilter} from 'component';

const TableHeaderColumn = BootstrapTable.TableHeaderColumn;
const FilterItem = TableFilter.FilterItem;
const List = createReactClass({
    mixins: [Reflux.listenTo(ListStore, 'onStatUpdate')],
    getInitialState() {
      return {
        appName: '',
        listData: []
      };
    },
    componentWillMount(){
      this.searchHandle();
      this.state.clipboard = new Clipboard('.copyUrl');
      this.state.clipboard.on('success', function (e) {
        MessageNew.success({title: "提示", content: "分享链接已复制到剪切板，请粘贴分享！", delay: 10});
        e.clearSelection();
      });
      this.state.clipboard.on('error', function (e) {
        MessageNew.error({
          title: "警告",
          content: "您的浏览器不支持剪切板复制，请使用其他浏览器或手动复制如下分享连接：\n" + e.trigger.getAttribute('data-clipboard-text'),
          delay: 100
        });
      });
    },
    onPageChange(currentPage, sizePerPage){
      this.searchHandle(currentPage, sizePerPage);
    },
    /**ß
     * 软件名称改变
     * @param value
     */
    appNameChangeHandle(e) {
      this.setState({
        appName: e.target.value
      });
    },
    onStatUpdate(data) {
      //console.log(data);
      this.setState({listData: data})
    },
    /**
     * 查询事件
     */
    searchHandle() {
      ListAction.searchHandle({appName: this.state.appName}).then(
        data => {
          if (data.errorCode == 0) {
            ListStore.setListState("items", data.data || []);
          }
          else {
            MessageNew.error({title: "查询失败! ", content: data.message});
          }
        }
      );
    },

    operatorHandle(value, row) {
      return (
        <div>
          <Link
            activeStyle={{color: 'red'}}
            to="/testProject/detail"
            query={{
              id: row.id,
              type: "edit"
            }}
          >编辑</Link>&nbsp;
          |&nbsp;
          <a
            style={{marginLeft: "10px"}}
            href="javascript:void(0)"
            className="copyUrl"
            data-clipboard-text={common.baseInfo.baseDir + "/static/release/index.html?versionId=" + row.id}
          >
            分享
          </a>
        </div>
      )
    },
    render() {
      return (
        <div id="management_basic">
          <TableFilter>
            <FilterItem float="left">
              <FilterBox></FilterBox>
            </FilterItem>
            <FilterItem float="left">
              <Input
                style={{width: "200px"}}
                onChange={this.appNameChangeHandle}
                value={this.state.appName}
                placeholder="软件名称"
              />
            </FilterItem>
            <FilterItem float="left">
              <Button onClick={this.searchHandle} size="large">查询</Button>
            </FilterItem>

            <FilterItem float="right">
              <Link
                style={{marginRight: '20px'}}
                activeClassName="active"
                to="/testProject/detail"
                query={{type: 'add'}}
              >
               添加</Link>
            </FilterItem>

          </TableFilter>
          <div className="management_basic_content">
            <BootstrapTable
              data={this.state.listData.list}
              pagination={true}
              hover={true}
              id="table-load"
              size="small"
              options={{
                  page: this.state.listData.list == undefined ? 1 : this.state.listData.currentPage || 1,
                  onPageChange: this.onPageChange,
                  sizePerPage: this.state.listData.sizePerPage || 10,
                  onSortChange: this.onSortChange,
                  defaultSortName: 'id',
                  defaultSortOrder: 'desc'
                }}
            >
              <TableHeaderColumn width="17%" dataField="id" isKey={true} dataSort={false}>版本ID</TableHeaderColumn>
              <TableHeaderColumn width="17%" dataField="versionNo">版本编号</TableHeaderColumn>
              <TableHeaderColumn width="17%" dataField="appId">软件ID</TableHeaderColumn>
              <TableHeaderColumn width="17%" dataField="appName" dataSort={false}>软件名称</TableHeaderColumn>
              <TableHeaderColumn width="8%" dataField="appCode" dataSort={false}>软件编号</TableHeaderColumn>
              <TableHeaderColumn width="8%" dataField="statusDesc" dataSort={false}>状态</TableHeaderColumn>
              <TableHeaderColumn width="24%" dataFormat={this.operatorHandle} dataSort={false}>操作</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      )
    }
  })
;
export default List;
