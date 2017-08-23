import React from 'react';

import { Button, Row, Col, Select} from 'antd';

const SubmitGroup = Button.SubmitGroup;
const Option = Select.Option;

const APP_TYPE = [
  {name: "android", value: "android"},
  {name: "ios", value: "ios"},
  {name: "web", value: "web"},
  {name: "backend", value: "backend"},
];

const FilterBox = React.createClass({
    getInitialState(){
        return {
            appType: "",
            app: ""
        };
    },
    renderInfoSelect(name){
        let object = null;
        switch (name) {
            case "appType":
                object = APP_TYPE.map(function (item, key) {
                    return <Option key={key} value={item.value}>{item.name}</Option>
                });
                break;
            case "app":
                object = this.props.info.appAllInfo.map(function (item, key) {
                    return <Option key={key} value={item.id}>{item.appName + "(" + item.appType + ")"}</Option>
                });
                break;
            default:
                break;
        }
        return object;
    },
    closeFilterBox(){
        this.props.filterBox.hide()
    },
    appTypeHandleChange(value){

        this.setState({appType: value})
    },
    appCodeHandleChange(value){

        this.setState({app: value})
    },
    firstFilterBoxHandle(){
        this.props.onConfirm({
            appType: this.state.appType,
            app: this.state.app,
        })
    },
    render(){

        return (
            <div style={{width: "350px", padding: "20px 10px 10px 0px"}} id="filterBox">


                <Row>
                    <Col span={5} offset={1}>
                        <label className="inline">软件类型：</label>
                    </Col>
                    <Col span={18}>
                        <Select
                          size="large"
                                placeholder="不限"
                                style={{width: "100%"}}
                                onChange={this.appTypeHandleChange}
                                value={this.state.appType}
                                getPopupContainer={() => document.getElementById('filterBox')}>
                            <Option key="" value="">不限</Option>
                            {this.renderInfoSelect("appType")}
                        </Select>
                    </Col>
                </Row>

                <Row>
                    <Col span={5} offset={1}>
                        <label className="inline">应用程序：</label>
                    </Col>
                    <Col span={18}>
                        <Select
                          size="large"
                                placeholder="不限"
                                style={{width: "100%"}}
                                onChange={this.appCodeHandleChange}
                                value={this.state.app}
                                getPopupContainer={() => document.getElementById('filterBox')}>
                            <Option key="" value="">不限</Option>
                            {this.renderInfoSelect("app")}
                        </Select>

                    </Col>
                </Row>
                <Row>
                    <Col span="24" style={{textAlign: "center", marginBottom: "10px"}}>
                        <SubmitGroup >
                            <Button type="ghost" size="large" onClick={this.closeFilterBox}>取消</Button>
                            <Button type="primary" size="large" promise={true} onClick={this.firstFilterBoxHandle}>确定</Button>
                        </SubmitGroup>
                    </Col>
                </Row>
            </div>
        )
    }

})

export default FilterBox;
