import React from 'react'
import hlogo from './dices 1.png'


const Home = ({istoggle}) => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-4 div1'><img src={hlogo} alt='kk'className='img-fluid' style={{width:"100%",height:"100%",margin:"20%"}}></img></div>
        <div className='col-md-4 div2' style={{marginTop:"20%",marginLeft:"8%"}}><h1 style={{width:"100%",fontSize:"450%",fontWeight:"700"}}>DICE GAME</h1>
        <button className='btn btn-dark'  onClick={istoggle}>play now</button></div>
      
      </div>
    </div>
  )
}





export default Home
