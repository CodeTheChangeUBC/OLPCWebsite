import * as React from 'react';
import './App.css';
import Banner from './Banner/Banner';
import Image from './Image/Image';

// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div> 
        <Banner />
        <Image />
      </div>
    );
  }
}

export default App;
