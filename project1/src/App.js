import Header from './Components/Header';
import Menu from './Components/Menu';
import Body from './Components/Body';

import './App.css';


 

function App() {

  let Component
  switch (window.location.pathname) {
    case "/":
  Component=<Body/>
  break
case "/menu":
  Component=<Menu/>
  break

  case "/location":
      Component=<Menu/>
     break

      



      case "/about":
        Component=<Menu/>
      break

  


   

default :
        Component=<Menu/>
      break

  
   
}
  return(
<div className="App">



    
<header className="App-header">
  <Header></Header>


{Component}
  

    
   
  

</header>
</div>
               
       
       



  )}

export default App;
