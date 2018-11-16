import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'tachyons';
import App from './App';
import './index.css';
// import Banner from './Banner/Banner';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
