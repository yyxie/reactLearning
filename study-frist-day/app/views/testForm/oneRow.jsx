import React from 'react';
import createReactClass from 'create-react-class';

import {Button, Form, Input, Select, Radio, Checkbox, DatePicker, Col, Row} from 'antd';

const FormItem = Form.Item;
const createForm = Form.create;
const RadioGroup = Radio.Group;

let todoCount = 0;

//详情页面
let FormContent = createReactClass({
  getInitialState() {
    return {
      savePassword: true,
      todo: []
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return false;
      }

      console.log(values);
      //this.infoExchange(values);
    });
  },
  /**
   * 添加一行
   */
  addPerson() {
    const {getFieldValue, setFieldsValue} = this.props.form;
    let todoData = getFieldValue('todo');

    todoCount--;

    todoData.push({
      id: `${todoCount}`,
      name: "",
      phone: "",
    });
    setFieldsValue({'todo': todoData});
  },
  handleDel(index) {
    const {getFieldValue, setFieldsValue} = this.props.form;
    let todo = getFieldValue('todoData');

    // todo.splice(index, 1);

    let remainedTodo = [];
    todo.forEach(item => {
      if (item.id != index)
        remainedTodo.push(item);
    })

    //todo.pop();
    console.log('删除后。。。。');
    console.log(remainedTodo);
    setFieldsValue({
      todo: remainedTodo
    });
  },
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  },
  /**
   * 禁用开始时间
   * @param startValue
   * @returns {boolean}
   */
  disabledStartDate(startValue) {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  },
  /**
   * 禁用结束时间
   * @param endValue
   * @returns {boolean}
   */
  disabledEndDate(endValue) {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  },

  onChange(field, value) {
    this.setState({
      [field]: value,
    });
  },

  onStartChange(value) {
    this.onChange('startValue', value);
  },

  onEndChange(value) {
    this.onChange('endValue', value);
  },

  handleStartOpenChange(open) {
    if (!open) {
      this.setState({endOpen: true});
    }
  },

  handleEndOpenChange(open) {
    this.setState({endOpen: open});
  },
  changeRows(rows) {
    this.setState({
      todo: rows
    });
  },

  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 3, offset: 2},
      wrapperCol: {span: 15},
    };

    getFieldDecorator("todo", {
      initialValue: []
    });

    const todo = getFieldValue("todo");

    return (
      <div>
        <Form layout={'horizontal'}>
          <FormItem {...formItemLayout} label="姓名：" hasFeedback>
            {getFieldDecorator('userName', {
              rules: [{
                required: true, message: '请输入姓名'
              }, {
                min: 5, message: '姓名长度不能小于5'
              }, {
                max: 20, message: '姓名长度不能大于 20'
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="密码：" hasFeedback>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入密码'
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="确认密码：" hasFeedback>
            {getFieldDecorator('rePassword', {
              rules: [{
                required: true, message: '请输入确认密码'
              }, {
                validator: this.checkConfirm
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="开始时间：" hasFeedback>
            {getFieldDecorator('beginDate', {
              rules: [{
                required: true, message: '请输入开始时间'
              }],
            })(
              <DatePicker
                disabledDate={this.disabledStartDate}
                showTime
                format="YYYY-MM-DD"
                placeholder="Start"
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="结束时间：" hasFeedback>
            {getFieldDecorator('endDate', {
              rules: [{
                required: true, message: '请输入结束时间'
              }],
            })(
              <DatePicker
                disabledDate={this.disabledEndDate}
                showTime
                format="YYYY-MM-DD"
                placeholder="End"
                onChange={this.onEndChange}
                onOpenChange={this.handleEndOpenChange}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="性别：">
            {getFieldDecorator('radio-group', {
              rules: [{
                required: true, message: '请选择性别'
              }]
            })(
              <RadioGroup>
                <Radio value="0">男</Radio>
                <Radio value="1">女</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem wrapperCol={{span: 4, offset: 8}}>
            <Checkbox
              value={this.state.savePassword}
              onChange={this.handleChange}
            >
              是否保存密码
            </Checkbox>
          </FormItem>
          <FormItem {...formItemLayout} label="同住人：">
            <Button type="primary" promise={true} onClick={this.addPerson}>添加</Button>
          </FormItem>
          {
            todo.map((item, k) => {
              console.log(item);
              return (
                <FormItem key={k}>
                  {/*<OneRow data={this.props.form} key={item.id} onDel={this.changeRows} currentItem={item} index={i}/>*/}
                  <Col span={6}>
                    <FormItem {...formItemLayout} label="姓名：" hasFeedback>
                      {getFieldDecorator(`todoData.${k}.name`, {
                        rules: [{
                          required: true, message: '请输入姓名'
                        }, {
                          min: 5, message: '姓名长度不能小于5'
                        }, {
                          max: 20, message: '姓名长度不能大于 20'
                        }],
                        initialValue: item.name
                      })(
                        <Input/>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem {...formItemLayout} label="手机号码：" hasFeedback>
                      {getFieldDecorator(`todoData.${k}.phone`, {
                        rules: [{
                          required: true, message: '请输入姓名'
                        }, {
                          min: 5, message: '姓名长度不能小于5'
                        }, {
                          max: 20, message: '姓名长度不能大于 20'
                        }],
                      })(
                        <Input/>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={4}>
                    <FormItem wrapperCol={{span: 4, offset: 1}}>
                      {getFieldDecorator(`todoData.${k}.judi`, {})(
                        <Checkbox>
                          账单权限
                        </Checkbox>
                      )}

                    </FormItem>
                  </Col>
                  <Col>
                    {getFieldDecorator(`todoData.${k}.id`, {
                      initialValue: item.id
                    })(
                      <span></span>
                    )}
                    <Button type="primary" promise={true} onClick={this.handleDel.bind(this, item.id)}>删除</Button>
                  </Col>
                </FormItem>
              );
            })
          }
          <FormItem wrapperCol={{span: 12, offset: 8}}>
            <Button type="primary" promise={true} onClick={this.handleSubmit} ref="chilRow">确定</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
});
FormContent = createForm({
  mapPropsToFields(props) {
    return common.mapFields(props.formState);
  }
})(FormContent);

const MyForm = createReactClass({
  getInitialState() {
    return {
      versionData: {
        todo: [{
          id: "1",
          name: "name",
        }]
      }
    };
  },
  componentDidMount() {
  },

  render() {
    return (
      <FormContent {...this.props} formState={this.state.versionData}/>
    )
  }
});
export default MyForm;
