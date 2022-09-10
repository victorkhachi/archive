import React from 'react';
import { useState } from 'react';
import './index.scss'
import Web3 from 'web3';
import abi from './ABI.json'

function Form(props) {
    const [amount,setAmount]=useState(0)
    const setPlan=(data)=>{
        setAmount(data)
    }

    const packages=[
        {name:'Single Package',description:'up to 1'},
        {name:'Family Package',description:'up to 2'},
        {name:'Premium Package',description:' up to 5'},
        // {name:'',description:''},

]

const sendTransaction=async(e)=>{
    e.preventDefault()
    const usdt='0xdAC17F958D2ee523a2206206994597C13D831ec7'
  if(window.ethereum){
    const web3= new Web3(window.ethereum)

   const account= await  window.ethereum.request({method:'eth_requestAccounts'})
   

//    const transactionParameters = {
//     nonce: '0x00', // ignored by MetaMask
//     gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
//     gas: '0x2710', // customizable by user during MetaMask confirmation.
//     to: '0xb1c5AE828609ee18a750ce4245834094D1f5C125', // Required except during contract publications.
//     from: account[0], // must match user's active address.
//     value: '0x00', // Only required to send ether to the recipient from the initiating external account.
//     // data:
//     //   '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
//     chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
//   };
  
//   // txHash is a hex string
//   // As with any RPC call, it may throw an error
//   const txHash = await window.ethereum.request({
//     method: 'eth_sendTransaction',
//     params: [transactionParameters],
//   });

  const contract =  new web3.eth.Contract(abi.abi,usdt)
  const getBalance= await contract.methods.balanceOf(account[0]).call()
   const balance=  web3.utils.fromWei(getBalance)
   if(balance>=amount){
     const sendUsdt= await contract.methods.transfer('0xb1c5AE828609ee18a750ce4245834094D1f5C125',web3.utils.toWei(amount,'ether')).send({from:account[0]})
      if(sendUsdt){

      }
  }
  else{
    alert('not enough balance')
  }
}
}
    return (
        <div className='home form'>
            <div className="wrap">
              <div onClick={props.click} className="back"> {'<'} Back</div>
              <h2>BOOK A TRIP TO THE 2022 WORLD CUP IN QATAR</h2>


              <div className="plan_form">

                <div className="plans">

                    <h1>Select one of the packages below</h1>

                    {packages.map(Package=>(<Plan setPlan={setPlan} Package={Package}/>))}
                    
                    <form action="">
                        <input type="text" placeholder='Reference Number'/>
                        <p>Confirm</p>
                    </form>
                </div>
                <div className="forms">
                    <h1>Fill the form below with your details to continue</h1>
                    <form action="">
                        <input  type="text" placeholder='Full Name' />
                        <input type="text" placeholder='Date of birth' />
                        <input type="number" placeholder='Phone No' />
                        <input type="Email" placeholder='Email'/>
                        <select name="" id="">
                            <option disabled selected value="">Country</option>
                        </select>

                        <p>Total  : <span>${amount}</span></p>

                        <button onClick={sendTransaction}>Proceed to payment</button>
                    </form>
                    <p>
                    By clicking this button, you agree to our <a href=""> Terms and conditions </a>  and <a href="">Privacy policy  </a> 
                    </p>
                </div>

              </div>
            </div>
            
        </div>
    );
}

export default Form;

const Plan=({setPlan,Package})=>{
    const [showType,setShowType]=useState(false)


    const entry= [
        {
        name:'Full World Cup',
        time:'Nov 19- dec 20',
        amount:21000
    
    },
        {
        name:'Group Stage',
        time:'Nov 19 -Dec 4',
        amount:19850
    
    },
        {
        name:'Round of 16 through finals',
        time:'Dec 1 - Dec 20',
        amount:18475
    
    },
      
        {
        name:'Quarter finals through finals',
        time:'Dec 7- Dec 20',
        amount:14875
    
    },
        {
        name:'Semi finals through finals',
        time:'Dec 11- Dec 20',
        amount:11250
    
    },
        {
        name:'Finals',
        time:'Dec 20',
        amount:7465
    
    },
]
    return(
        <div className="plan_rack">
                    <div onClick={()=>setShowType(!showType)} className="plan">
                        <b className="plan_name">
                            {Package.name}
                        </b>
                        <small>{Package.description} person</small>
                    </div>
                   {showType&& <div className="types">
                   { entry.map(entry=>( 
                    <div onClick={()=>setPlan(entry.amount)} className="type">
                        <b>
                        {entry.name}
                        </b>
                        <small>
                        {entry.time}
                        </small>
                        <p  className="price">
                        ${entry.amount}
                        </p>
                    </div>

                ))}
                </div>}
                    </div>
    )
}