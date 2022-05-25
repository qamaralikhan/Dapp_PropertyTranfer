import React, { Component } from 'react';
import Web3 from 'web3';
import PropertyTransfer from './PropertyTransfer.json'
import {
  Route,
} from "react-router-dom";

class App extends Component {
  async componentDidMount() {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
    const myContract = await new web3.eth.Contract(PropertyTransfer.abi,PropertyTransfer.networks[5777].address);
    console.log(myContract.methods);
  }
  constructor()
  {
    super()

    
  }
  render(){
  return (
    <div>
   
    </div>
  );
  }
}

export default App;
