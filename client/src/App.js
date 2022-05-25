import React, { Component, Fragment } from 'react';
import Web3 from 'web3';
import PropertyTransfer from './PropertyTransfer.json'
import Header  from './components/Header';
import Footer from './components/Footer';
import PropertyDetail from './components/PropertyDetail';
import UploadProperty from './components/UploadProperty';
class App extends Component {  
  render(){
  return (
    <Fragment>
      <Header/>
      <UploadProperty/>
      <PropertyDetail/>
      <Footer/>
    </Fragment>
  );
  }
}

export default App;
