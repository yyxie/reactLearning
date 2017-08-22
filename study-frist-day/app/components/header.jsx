'use strict';

import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';

let Header = React.createClass({

  render(){
    return (
      <div>
        <span>当前位置:</span>
        <Breadcrumbs
          routes={this.props.routes} params={this.props.params}
          customClass="bread-crumbs"
          excludes={['wrapper', 'Panel']}
          separator="-"/>
        <hr/>
      </div>
    )
  }
});


export default Header;
