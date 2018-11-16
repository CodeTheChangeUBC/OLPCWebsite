import * as React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
// import Image from './Components/Image/Image';

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

class App extends React.Component {
  public render() {
    return (
      <div> 
        <Banner />
        {/* <Image /> */}

        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
