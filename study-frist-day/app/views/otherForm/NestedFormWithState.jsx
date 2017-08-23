import React from 'react';
import Icon from 'react-fa'
import {Form, Input, Button, Card, Row, Col} from 'antd';
const FormItem = Form.Item;
const ButtonGroup = Button.Group;

import {Util, BootstrapTable, FieldsetCard} from 'component';
const TableHeaderColumn = BootstrapTable.TableHeaderColumn;

let uuid = 0;

const charSpliter = ',';

const testData = [
  {
    key: "898989",
    name: "890989"
  }
];

const COM = React.createClass({
  displayName: '表单校验',

  getInitialState: function () {
    return {
      dataSets: []
    }
  },


  componentDidMount(){
    //this.setState({dataSets: testData});
  },

  submit(e) {
    e.preventDefault();
    //console.log('收到表单值：', this.props.form.getFieldsValue());
    this.props.form.validateFields({force: true}, (errors, values) => {
      if (errors) {
        //console.log(errors);
        this.setState({result: ""});
      } else {
        debugger;
        console.log('-----第一种-----');
        console.log(values);

        //const parseObj = Util.parseFormObjNew(values.item);

        //console.log(JSON.stringify(parseObj))
      }
    });
  },
  onDelClick(){
    const {dataSets} = this.state;
    uuid--;

    dataSets.pop();
    this.setState({dataSets});
  },
  onAddClick(){

    uuid++;

    let dataSets = this.state.dataSets;

    dataSets.push({
      key: uuid,
      name: uuid
    });

    this.setState({dataSets})
  },
  onDelByIdClick(id) {

    let {dataSets} = this.state

    dataSets = dataSets.filter(item => item.key != id);

    this.setState({dataSets})
  },
  delRender(val, row) {
    return (
      <Button onClick={this.onDelByIdClick.bind(this, row.key)}>Del</Button>
    )
  },
  nameRender(val, row, d, index) {

    const {getFieldProps} = this.props.form;

    return (
      <FormItem>
        <Input
          maxLength={12}
          {
            ...getFieldProps(
              `dataSet${charSpliter + row.key + charSpliter}name`,
              {
                rules: [{required: true, message: '不能空'}],
                initialValue: row.name
              },
            )
          }
        />
      </FormItem>
    )

  },
  idRender(val, row, d, index){
    const {getFieldProps} = this.props.form;

    return (
      <span
        {
          ...getFieldProps(
            `dataSet${charSpliter + val + charSpliter}key`,
            {
              rules: [{required: true, message: '不能空'}],
              initialValue: row.key
            }
          )
        }
      >{row.key}</span>
    )
  },
  blockRender(val, row, d, index){
    return (
      <span>{index}</span>
    )
  },
  render() {

    const {dataSets} = this.state;

    return (
      <div>
        <Form layout={'horizontal'}>

          <FieldsetCard
            title="动态增减表单项"
            extra={
            <ButtonGroup>
              <Button onClick={this.onAddClick}><Icon name="plus"/></Button>
              <Button onClick={this.onDelClick}><Icon name="minus"/></Button>
            </ButtonGroup>
          }
          >

            <BootstrapTable
              size="small"
              keyField="key"
              columnFix={true}
              data={dataSets}
              view={false}
            >
              <TableHeaderColumn
                width="120px"
                dataAlign="center"
                dataField="key"
                dataFormat={this.blockRender}
              >段</TableHeaderColumn>
              <TableHeaderColumn
                width="120px"
                dataAlign="center"
                dataField="key"
                dataFormat={this.idRender}
              >id</TableHeaderColumn>
              <TableHeaderColumn
                width="120px"
                dataAlign="center"
                dataField="key"
                dataFormat={this.nameRender}
              >Name</TableHeaderColumn>
              <TableHeaderColumn
                width="120px"
                dataAlign="center"
                dataFormat={this.delRender}
              >Del</TableHeaderColumn>
            </BootstrapTable>

          </FieldsetCard>
          <Row>
            <Col span={4}>
              <p>&nbsp;</p>
              <FormItem wrapperCol={{span: 18, offset: 6}}>
                <Button type="primary" onClick={this.submit}>提交</Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>

    );
  },
});


export default Form.create()(COM);
