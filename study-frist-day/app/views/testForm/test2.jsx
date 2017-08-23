import React from 'react';
import createReactClass from 'create-react-class';
import { Form, Button, InputNumber, Card } from 'antd';
const FormItem = Form.Item;

let uuid = -1;

const DynamicFieldSet = createReactClass({
  remove(k) {
    const { form } = this.props;
    const keys = form.getFieldValue('radiusKeys');
    form.setFieldsValue({
      'radiusKeys': keys.filter(key => key !== k),
    });
  },

  add() {
    uuid++;
    const { form } = this.props;
    const keys = form.getFieldValue('radiusKeys');
    const nextKeys = keys.concat(uuid);
    form.setFieldsValue({
      'radiusKeys': nextKeys,
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  },

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const _this = this;
    getFieldDecorator('radiusKeys', { initialValue: [] });
    const keys = getFieldValue('radiusKeys');
    const formItems = keys.map((k, index) => (
      <Card title="收集信息" extra={<a href="javascript:void(0)" onClick={(e) => _this.remove(k)} >Delete</a>} style={{ width: 300 }} key={k} >
        <FormItem
          label="半径"
        >
          {getFieldDecorator(`circle[${k}][radius]`, {
            rules: [{ required: true }]
          })(
            <InputNumber />
          )}
        </FormItem>
        <FormItem
          label="颜色"
        >
          {getFieldDecorator(`circle[${k}][color]`, {
            rules: [{ required: true }]
          })(
            <InputNumber />
          )}
        </FormItem>
      </Card>
    ));
    return (
      <Form onSubmit={this.handleSubmit}>
        { formItems }
        <Button type="primary" size="large" onClick={this.add}>Add Circle +++ </Button>
        <Button type="primary" htmlType="submit" size="large">Submit</Button>
      </Form>
    )
  }
})

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);
export default WrappedDynamicFieldSet;
