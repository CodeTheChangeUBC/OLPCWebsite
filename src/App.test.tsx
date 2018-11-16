import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Banner from './Components/Banner/Banner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
