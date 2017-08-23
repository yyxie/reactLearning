import React from 'react';
import createReactClass from 'create-react-class';

import {Button, Form, Input, Select, message} from 'antd';
import {PanelModal} from 'component';


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
const DialogContent = createReactClass({

  handleYes(){
    alert(' 确定');
  },
  handleCancel(){
    alert('取消');
  },
  render(){
    return (
      <Form layout={'horizontal'}>
        <FormItem wrapperCol={{span: 12, offset: 8}}>
          <span>是否确认删除？</span>
        </FormItem>
        <FormItem wrapperCol={{span: 12, offset: 8}}>
          <Button type="primary" promise={true} onClick={this.handleYes}>确定</Button>
        </FormItem>
        <FormItem wrapperCol={{span: 12, offset: 8}}>
          <Button type="primary" promise={true} onClick={this.handleCancel}>取消</Button>
        </FormItem>
      </Form>
    )
  }
});

const Detail = createReactClass({
  getInitialState(){
    return {
      'isShow': false
    }
  },
  getParameterName(){
    let param = {code: Dict.DictCode.parameterName};
    //DetailAction.saveHandle(this.state);
  },
  openFistDialog(e){
    this.refs.fristModal.setModal(true);
  },
  openSecondDialog(){
    this.setState({
      isShow: true
    });
  },
  closeSecondDialog(e){
    this.setState({
      isShow: false
    });
  },
  render(){
    const formItemLayout = {
      labelCol: {span: 3, offset: 2},
      wrapperCol: {span: 15},
    };
    return (
      <div>
        <Form layout={'horizontal'}>
          <FormItem wrapperCol={{span: 12, offset: 8}}>
            <Button type="primary" promise={true} onClick={this.openFistDialog} style={{marginRight: '10px'}}>打开第一个弹框</Button>
            <Button type="primary" promise={true} onClick={this.openSecondDialog}>打开第二个弹框</Button>
          </FormItem>
          <PanelModal ref="fristModal" title="测试弹框1" customStyles={modalStyles}>
            <DialogContent />
          </PanelModal>
          <PanelModal ref="secondModal" title="测试弹框2" customStyles={modalStyles} closeModal={this.closeSecondDialog} isOpen={this.state.isShow}>
            <DialogContent />
          </PanelModal>
        </Form>
      </div>
    )
  }
});
export default Detail;
