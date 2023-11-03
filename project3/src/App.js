import { useState } from "react";
import Home from "./Components/Home.js";
import Home2 from "./Home2.js";


function App() {
const [isClicked, setisClicked,] = useState(false);
const funtionToggle=()=>{
  setisClicked((prev)=>!prev)
}
  return (
    <div className="App">
      <header className="App-header">
      {isClicked ?<Home2/>:<Home istoggle={funtionToggle}/>}


      </header>
    </div>
  );
}

export default App;
