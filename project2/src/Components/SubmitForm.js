import React, { useState } from 'react'
import Buttonprops from './Buttonprops';
const SubmitForm = () => {
    const [name,setname]=useState('kabita');
    const [email,setemail]=useState('kabita@gmail.com');
    const [address,setaddress]=useState('butwal');
 
    let callME=(event)=>{
        event.preventDefault();
  
  setemail(event.target[0].value);
  setname(event.target[1].value);
    setaddress(event.target[2].value);

    }
  return (
    <div>
    <h3 className='text-center'>submit form</h3>
        <form onSubmit={callME}>
  <div class=" container form-row my-5 ">
  <div className='row justify-content-evenly'>
    <div class="form-group col-md-5  " style={{width:"30%"}}>
    
    <div className='pt-4'>  <label for="inputEmail4">Email</label>
      <input type="email" class="form-control " id="inputEmail4" placeholder="Email"/></div>
      <div className='pt-4'>  
      <label for="inputEmail4">Name</label>
      <input type="name" class="form-control" id="inputEmail4" placeholder="Name"/>
      </div>
      <div className='pt-4'>  
      <label for="inputEmail4">Address</label>
      <input type="address" class="form-control" id="inputEmail4" placeholder="Address"/>
      </div>
   
  
      <Buttonprops isoutline={false}  msg="submit" style={{marginTop:"10px"}}></Buttonprops>
  </div>
    </div>
  </div>
</form>
<div><h3>{`i am ${name} from ${address} .My gmail ${email}`}</h3></div>
    </div>
  )
}

export default SubmitForm
