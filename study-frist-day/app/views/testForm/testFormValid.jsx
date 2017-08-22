import React from 'react';
import createReactClass from 'create-react-class';

import {Button, Form, Input, Select, Radio, Checkbox, DatePicker, Col, Row, Upload, Icon} from 'antd';

const FormItem = Form.Item;
const createForm = Form.create;
const RadioGroup = Radio.Group;
const Option = Select.Option;
import Number from './numberInput.jsx';

let todoCount = 1;

//详情页面
let FormContent = createReactClass({
  getInitialState() {
    return {
      savePassword: true,
      todo: [],
      selectData: '',
      confirmDirty: false
    };
  },
  /**
   * 提交
   * @param e
   */
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return false;
      }

      console.log(values);
      console.log('todoData......');
      console.log(values.todoData);
      let resultTodo = values.todoData.filter((ele, i) => ele !== undefined)
      console.log(values.todoData.length);
      console.log(values.todoData);
      console.log('结果。。。。');
      console.log(resultTodo);
      //this.infoExchange(values);
    });
  },
  /**
   * 添加一行
   */
  addPerson() {
    const {getFieldValue, setFieldsValue} = this.props.form;
    let todoData = getFieldValue('todo');
    console.log('添加前---');
    console.log(getFieldValue('todoData'));
    todoCount++;
    todoData.push({
      id: `${todoCount}`,
      name: "",
      phone: "",
    });
    setFieldsValue({'todo': todoData});
    console.log('添加后---');
    console.log(getFieldValue('todoData'));
  },
  /**
   * 删除一行
   * @param index
   */
  handleDel(index) {
    const {getFieldValue, setFieldsValue} = this.props.form;
    let todo = getFieldValue('todo');
    console.log('删除前---');
    console.log(getFieldValue('todoData'));
    let remainedTodo = [];
    remainedTodo = todo.filter((ele, i) => ele.id !== index);
    setFieldsValue({
      'todo': remainedTodo
    });
    console.log('删除后---');
    console.log(getFieldValue('todoData'));
  },
  handleConfirmBlur(e){
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  },
  /**
   * 考虑第一次输入确认密码的情况
   * @param rule
   * @param value
   * @param callback
   */
  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['rePassword'], { force: true });
    }
    callback();
  },
  /**
   * 检测两次输入的密码是否相同
   * @param rule
   * @param value
   * @param callback
   */
  checkConfirm(rule, value, callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不相同!');
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
  handleDirectionChange(value) {
    console.log(`selected ${value}`);
    this.setState({
      selectData: value
    });
  },
  //获取所有的select 下面的option
  getAllOption(){
    const array = [{text: '东', value: '0'}, {text: '南', value: '1'}, {text: '西', value: '3'}, {text: '北', value: '4'}];
    let arr = [];
    array.map((item, i) => {
      arr.push(<Option value={item.value} key={i.toString(36) + i}>{item.text}</Option>);
    });
    return arr;
  },
  normFile: (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  },
  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 3, offset: 2},
      wrapperCol: {span: 15},
    };
    const innerFormItemLayout = {
      labelCol: {span: 8},
      wrapperCol: {span: 12},
    };

    getFieldDecorator("todo", {
      initialValue: []
    });

    const todo = getFieldValue("todo");
    const optionList = this.getAllOption();
    return (
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
              }, {
                validator: this.checkPassword
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur}/>
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
          <FormItem {...formItemLayout} label="时间范围：">
            <Row gutter={8}>
              <Col span={6}>
                <FormItem>
                  {getFieldDecorator('beginDate', {
                    rules: [{
                      required: true, message: '请输入开始时间'
                    }],
                  })(
                    <DatePicker
                      disabledDate={this.disabledStartDate}
                      //showTime
                      placeholder="Start"
                      onChange={this.onStartChange}
                      onOpenChange={this.handleStartOpenChange}
                    />
                  )}
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem>
                  {getFieldDecorator('endDate', {
                    rules: [{
                      required: true, message: '请输入结束时间'
                    }],
                  })(
                    <DatePicker
                      disabledDate={this.disabledEndDate}
                      //showTime
                      placeholder="End"
                      onChange={this.onEndChange}
                      onOpenChange={this.handleEndOpenChange}
                    />
                  )}
                </FormItem>
              </Col>
            </Row>
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
          <FormItem {...formItemLayout} label="方向：">
            {getFieldDecorator('selectOption', {
              rules: [{
                required: true, message: '请选择方向'
              }],
            })(
              <Select
                style={{ width: 120 }}
                className="line-border"
                placeholder="请选择方向"
                mode="tags"
              >
               {
                 optionList
                 /* array.map((item, i) => {
                    return (<Option key={i} value={item.value}>{item.text}</Option>)
                  })*/
                }
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="年龄：">
            {getFieldDecorator('age', {
              rules: [{
                required: true, message: '请选择年龄'
              }]
            })(
              <Number style={{ width: 120 }} data-todo="岁"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Dragger"
          >
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                </Upload.Dragger>
              )}
            </div>
          </FormItem>
          <FormItem {...formItemLayout} label="同住人：">
            <Button onClick={this.addPerson}>添加</Button>
          </FormItem>
          {
            todo.map((item, k) => {
              debugger;
              return (
                <FormItem {...formItemLayout} label={k + 1} key={item.id}>
                  <Row>
                    {/*<OneRow data={this.props.form} key={item.id} onDel={this.changeRows} currentItem={item} index={i}/>*/}
                    <Col span={8}>
                      <FormItem {...innerFormItemLayout} label="姓名：" hasFeedback>
                        {getFieldDecorator(`todoData[${item}][name]`, {
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
                    <Col span={8}>
                      <FormItem {...innerFormItemLayout} label="手机号码：" hasFeedback>
                        {getFieldDecorator(`todoData[${item}][phone]`, {
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
                      <FormItem>
                        {getFieldDecorator(`todoData[${item}][judi]`, {})(
                          <Checkbox>
                            账单权限
                          </Checkbox>
                        )}

                      </FormItem>
                    </Col>
                    <Col>
                      <Button onClick={this.handleDel.bind(this, item.id)}>删除</Button>
                    </Col>
                  </Row>
                </FormItem>
              );
            })
          }
          <FormItem wrapperCol={{span: 12, offset: 8}}>
            <Button type="primary" onClick={this.handleSubmit} ref="chilRow">确定</Button>
          </FormItem>
        </Form>
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
        todo: []
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
