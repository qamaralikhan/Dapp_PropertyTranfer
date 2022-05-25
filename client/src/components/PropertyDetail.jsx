import React, { Component } from 'react';
import Web3 from 'web3';
import PropertyTransfer from '../PropertyTransfer.json'

var myContract = {} //Setup global variable
class PropertyDetails extends Component {
  constructor()
  {
    super()
      this.state = {details:{}}    
  }
  async componentDidMount() {
    const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
    myContract = await new web3.eth.Contract(PropertyTransfer.abi,PropertyTransfer.networks[5777].address);
   console.log(await web3.eth.getAccounts())
  }
  
  async GetPropDetail(e)
  {
    e.preventDefault();
    console.log('Get Detail')
    var res = await myContract.methods.propertyDetail(2001).call()
    // Get All Accounts info 
    this.setState({details:res})
  }
  async UploadPropDetail(e)
  {
    e.preventDefault();
    //var prop_Obj = {id:2002,new_Ower_Address:,propAddress:"Property Address 2"}
    var res = await myContract.methods.uploadProperty(102,'0x112Aed8A75949fB4265A148E396Dc03788F6551F',
                'Property Address 2').send({from:'0x112Aed8A75949fB4265A148E396Dc03788F6551F'})
    console.log(res);
  }
  async TranferProperty(e)
  {
    e.preventDefault();
    //var prop_Obj = {id:2002,new_Ower_Address:,propAddress:"Property Address 2"}
    var res = await myContract.methods.transfer(2001,'0xE417Aa8DF294e57051C57BE008ef543a8D1d2b25')
                    .send({from:'0x112Aed8A75949fB4265A148E396Dc03788F6551F'})
    console.log(res);
  }

  render(){
  return (
    <div>
       <p align="center">
            <button onClick={(e)=>this.GetPropDetail(e)}>Get Property Info</button>
            </p>
            <p align="center">
            <button onClick={(e)=>this.UploadPropDetail(e)}>Upload Property</button>
            </p>
            <p align="center">
            <button onClick={(e)=>this.TranferProperty(e)}>Tranfer Property</button>
            </p>
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
          <tr>
          <td>Previous Owner:</td>
          <td> 
            {this.state.details.Pre_owners}
          </td>

          </tr>          
      </table>       
  </div>
  );
  }
}

export default PropertyDetails;
