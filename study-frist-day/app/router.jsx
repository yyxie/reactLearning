import React from 'react';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';

// main
import App from './views/app.jsx';
import Home from './views/home.jsx';
import Work from './views/work.jsx';
import Test from './views/test.jsx';
import TodoList from './views/todoList.jsx';
import NotFound from './views/NotFound.jsx';
import RefluxTest from './views/refluxTest.jsx';
import TodoListReflux from './views/todoListReflux.jsx';
import Child from './views/testProject/child.jsx';
import TestPanelModel from './views/panelModal/testPanelModel.jsx';
import MyFormModel from './views/testForm/testFormValid.jsx';
import MultiForm from './views/otherForm/form.jsx';
import WrappedDynamicFieldSet from './views/testForm/test2.jsx';

let routes = (
  <Router history={ hashHistory }>
    <Route name="首页" path="/" component={App}>
      <IndexRoute onEnter={ (nextState, replace) => replace('/home')}/>
      <Route name="home" path="/home" component={Home}/>
      <Route name="work" path="/work" component={Work}/>
      <Route name="test" path="/test" component={Test}/>
      <Route name="TodoList" path="/todoList" component={TodoList}/>
      <Route name="RefluxTest" path="/refluxTest" component={RefluxTest}/>
      <Route name="TodoListReflux" path="/todoListReflux" component={TodoListReflux}/>
      <Route name='project' path='/testProject/:action' component={Child}/>
      <Route name='ff' path='/panelModel' component={TestPanelModel}/>
      <Route name='form' path='/myFormModel' component={MyFormModel}/>
      <Route name="MultiForm" path="/MultiForm" component={MultiForm}/>
      <Route name="WrappedDynamicFieldSet" path="/WrappedDynamicFieldSet" component={WrappedDynamicFieldSet}/>
      <Route path='*' component={ NotFound }/>
    </Route>
  </Router>
);
export default routes;
