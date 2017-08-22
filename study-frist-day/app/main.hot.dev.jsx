import './assets/css/style.css';

import ReactDom from 'react-dom';
import AppConfig from './config/cfg.hot.dev.jsx';
import routes from './router.jsx';

function main() {
  common.api = AppConfig.api;
  common.baseInfo = AppConfig.baseInfo;

  ReactDom.render(routes, document.getElementById("app"));
}

main();
