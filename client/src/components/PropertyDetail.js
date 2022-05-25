import React, { Component } from 'react';
import Web3 from 'web3';
import PropertyTransfer from '../PropertyTransfer.json'

class PropertyDetails extends Component {

  constructor()
  {
    super()
    this.state = {propertyAddress:"missing"}    
    this.state = {details:{}}    

  }
  async componentDidMount() {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
    const myContract = await new web3.eth.Contract(PropertyTransfer.abi,PropertyTransfer.networks[5777].address);
   var res = await myContract.methods.propertyDetail(2002).call()
   this.setState({propertyAddress:res.propAddress})
   this.setState({details:res})
    console.log(this.state.details);
  }
  
  render(){
  return (
    <div>
      <table border="1" align="center">
        <tr>
            <td>Current Owner:</td>
          <td> 
            {this.state.details.currentAddress}
          </td>
          </tr>
          <tr>
          <td>Property Address:</td>
          <td> 
            {this.state.details.propAddress}
          </td>
          </tr>          
      </table>       
  </div>
  );
  }
}

export default PropertyDetails;
