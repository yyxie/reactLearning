import React from 'react';
import createReactClass from 'create-react-class';


import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';

const App = createReactClass({
  displayName: '首页',
  render() {
    return (
      <div className="container clearfix">
        <Header
          routes={this.props.routes}
          params={this.props.params}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

export default App;
