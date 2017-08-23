import React from 'react';
import createReactClass from 'create-react-class';

import {Button, Form, Input, Select, message} from 'antd';
import {PanelModal} from 'component';

import DetailAction from '../../actions/detailAction.jsx';
import DetailStore from '../../stores/detailStore.jsx';

import Reflux from 'reflux';

const FormItem = Form.Item;
const Option = Select.Option;
const createForm = Form.create;
const modalStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -20%)',
    border: 'none',
    padding: 0,
    width: '600px'
  },
  contentLimit: {
    maxHeight: "500px",
    overflowY: "auto"
  }
};
export default createReactClass({
  mixins: [Reflux.listenTo(DetailStore, 'onStatUpdate')],
  getInitialState() {
    return {
      versionData: {}
    };
  },
  onStatUpdate(data) {
    this.setState({
      versionData: data
    });
  },

  componentDidMount() {
    this.initData();
  },

  initData() {
    const versionId = this.props.id;
    if (versionId) {
      DetailAction.getById({versionId: versionId})
    }
  },
  startBeforeLoad() {
    let data = this.state.versionData;
    let {id, appId, versionNo, startTime, endTime, publishUrl, absoluteUrl, status, forceUpdate} = data;
    return data;
  },

  render() {
    let obj = this.startBeforeLoad();
    return (
      <Detail {...this.props} data={obj} reload={this.initData}/>
    )
  }
});
//详情页面
let Detail = createReactClass({
  getParameterName() {
    let param = {code: Dict.DictCode.parameterName};
    //DetailAction.saveHandle(this.state);
  },
  infoExchange(values) {
    let data = this.props.data;
    let result = {};
    let _this = this;
    const {setFieldsValue} = this.props.form;
    result = {
      id: data.id == undefined ? "" : data.id,
      appId: values.app == undefined || values.app == -1 ? "" : values.app,
      versionNo: values.version || "",
      startDate: '2017-01-09',
      endDate: '2017-01-12',
      appsoft: values.fileList == undefined ? "" : values.fileList[0],
      status: values.status || '1101001',
      forceUpdate: values.forceUpdate || 0,
      publishUrl: values.publishUrl || "",
      appName: values.appName == undefined || values.appName == -1 ? "" : values.appName,
    };
    // DetailAction.saveHandle(result);
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      this.infoExchange(values);
    });
  },
  render() {
    debugger;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 3, offset: 2},
      wrapperCol: {span: 15},
    };

    getFieldDecorator("id");

    return (
      <div>
        <Form layout={'horizontal'}>
          <FormItem {...formItemLayout} label="软件名称：" hasFeedback>
            {getFieldDecorator('appName', {
              rules: [{
                required: true, message: '请选择应用程序'
              }],
            })(
              <Input/>
            )}
          </FormItem>

          <FormItem wrapperCol={{span: 12, offset: 8}}>
            <Button type="primary" promise={true} onClick={this.handleSubmit}>确定</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
});
Detail = createForm({
  mapPropsToFields(props) {
    return common.mapFields(props.data);
  }
})(Detail);
