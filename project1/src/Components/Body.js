import React from 'react'
import shoes from "./shoe_image.png";


const Body = () => {
  
  return (
   
    <div>
      <div className='conatiner'>
        <div className='row justify-content-center pt-5'>
      
            <div className='col-md-6 col-sm-10'>
           
          <h2 style={{fontSize:"80px",fontWeight:"670",width:'500px',letterSpacing:"5px"}}>YOUR FEET <br></br>DESERVE<br></br>THE BEST</h2>
  
          <div className='row'>
            <div className='col-md-5'> <p style={{width:'500px',marginLeft:"15%"}}>Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.  </p>
                    <button className='btn btn-danger my-2 '>Shop now</button>
                    <button className='btn mx-3 my-2 ' style={{border:"2px  solid black"}}>Category</button></div>
      
          </div>
          </div>  
                 
               
                <div className='col-md-4 my-5 	.d-none .d-lg-block .d-xl-none'><img src={shoes} alt='nthg' className='img-fluid'></img></div>
         
     </div>
        </div>

    </div>
  )
}

export default Body
