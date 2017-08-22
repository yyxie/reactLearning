/**
 * by xieyuanyuan 20170807
 * 第一个用react 和 antd实现的todoList
 */
import 'antd/dist/antd.css';
import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Table} from 'antd';

const FormItem = Form.Item;
/* 组件包裹 */
const TodoList = createReactClass({
  getInitialState: function () {
   return {
     todolist: []
   };
  },
  handleChange: function (rows) {
    this.setState({
      todolist: rows
    });
  },
  render: function () {
    return (
      <div>
        {

        }
        <TypeNew onAdd={this.handleChange} todo={this.state.todolist}/>
        {
        }
        <ListTodo onDel={this.handleChange} onEdit={this.handleEdit} todo={this.state.todolist} />
      </div>
    );
  }
});

/* 创建新的列表项的组件 组件命名必须为首字母大写*/
const TypeNew = createReactClass({
  getInitialState: function (){
    return {
      submitval: '提交',
      name: '',
      age: ''
    }
  },
  handleAdd: function (e) {
    e.preventDefault();
    //const inputDom = this.refs.inputnew.getDOMNode();
    const name = this.state.name;
    const age = this.state.age;
    const rows = this.props.todo;
    if (name !== '' || age !== '') {
      rows.push({id: new Date().toTimeString(), name: this.state.name, age: this.state.age});
      this.props.onAdd(rows);
    }
    this.setState({
      name: '',
      age: ''
    });
  },
  handleChangeName: function (e) {
    this.setState({
      name: e.target.value
    });
  },
  handleChangeAge: function (e) {
    this.setState({
      age: e.target.value
    });
  },
  render: function () {
    return (
      <Form layout="inline" onSubmit={this.handleAdd}>
        <FormItem label="姓名">
          <span><Input value={this.state.name} onChange={this.handleChangeName} placeholder="typing" autoComplete="off" /></span>
        </FormItem>
        <FormItem label="年龄">
          <span><Input value={this.state.age} onChange={this.handleChangeAge} placeholder="typing" autoComplete="off" /></span>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>

    )
  }
});

/* 将每一行作为一个组件 */
const Onerows = createReactClass({
  getInitialState: function (){
    return {
      display: 'none',
      name: this.props.currentItem.name,
      age: this.props.currentItem.age
    }
  },
  handleDel: function (e) {
    let index = this.props.index;
    this.props.todo.splice(index, 1);
    this.props.onDel(this.props.todo);
  },
  handleEdit: function (e){
    let isvisible = this.state.display === 'none' ? 'inline-block' : 'none';
    this.setState({
      display: isvisible
    });
  },
  handleSave: function (e) {
    let index = this.props.index;
    this.props.todo[index] = {id: new Date().toTimeString(), name: this.state.currentVal, age: 18};
    this.props.onDel(this.props.todo);
    let isvisible = this.state.display === 'none' ? 'inline-block' : 'none';
    this.setState({
      display: isvisible
    });
  },
  handleChange: function (e) {
    this.setState({
      currentVal: e.target.value
    })
  },
  render: function () {
    return (
        <tr>
          <td style={{border: '1px solid #ddd', borderCollapse: 'collapse', padding: '10px'}}>
            <h3 style={{display: this.state.display === 'inline-block' ? 'none' : 'inline-block' }}>{this.state.name}</h3>
            <Input autoComplete="off" style={{display: this.state.display}} value={this.state.name} onChange={this.handleChange}/>
          </td>
          <td style={{border: '1px solid #ddd', borderCollapse: 'collapse', padding: '10px'}}>
            <h3 style={{display: this.state.display === 'inline-block' ? 'none' : 'inline-block' }}>{this.state.age}</h3>
            <Input autoComplete="off" style={{display: this.state.display}} value={this.state.age} onChange={this.handleChange}/>
          </td>
          <td style={{border: '1px solid #ddd', borderCollapse: 'collapse', padding: '10px'}}>
            <Button type="primary" onClick={this.handleDel} style={{marginRight: '10px', display: this.state.display === 'inline-block' ? 'none' : 'inline-block'}}>删除</Button>
            <Button type="primary" onClick={this.handleEdit} style={{marginRight: '10px', display: this.state.display === 'inline-block' ? 'none' : 'inline-block'}}>编辑</Button>
            <Button type="primary" onClick={this.handleSave} style={{marginRight: '10px', display: this.state.display}}>保存</Button>
            <Button type="primary" onClick={this.handleCancel} style={{marginRight: '10px', display: this.state.display}}>取消</Button>
          </td>
        </tr>
    );
  }
});
/* 表格作为一个组件*/
 const ListTodo = createReactClass({
   render: function () {
     return (
       <table id="todo-list" style={{border: '1px solid #ddd', borderCollapse: 'collapse', marginTop: '20px', marginLeft: '20px'}}>
         <thead>
           <tr>
             <td style={{border: '1px solid #ddd', borderCollapse: 'collapse', padding: '10px'}}>姓名</td>
             <td style={{border: '1px solid #ddd', borderCollapse: 'collapse', padding: '10px'}}>年龄</td>
             <td style={{border: '1px solid #ddd', borderCollapse: 'collapse', padding: '10px'}}>操作</td>
           </tr>
         </thead>
         <tbody>
         {
           this.props.todo.map(function (item, i) {
             return (
               <Onerows key={item.id} onDel={this.props.onDel} todo={this.props.todo} currentItem={item} index={i}/>
             );
           }.bind(this))
         }
         </tbody>
       </table>
     )
   }
 });

export default TodoList;
