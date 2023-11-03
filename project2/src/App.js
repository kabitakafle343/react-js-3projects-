import styled from "@emotion/styled";
import Body from "./Components/Body";
import Buttonprops from "./Components/Buttonprops";
import SubmitForm from "./Components/SubmitForm";
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {IoMdCall} from "react-icons/io"

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <Body></Body>

        <div className="container" ><div className="row justify-conetent-center "><div className="col-md-2 "><Buttonprops isoutline={false} icon={<BsFillChatLeftTextFill className="mx-1 my-0"/>}  msg="VIA SUPPORT CHAT" ></Buttonprops>
      </div>  <div className="col-md-1 "> <Buttonprops isoutline={false} icon={<IoMdCall className="mx-1 my-0"/>} msg="VIA CALL" ></Buttonprops></div>
 
  

 </div></div>
 <div className='justify-conetent-center my-3 ' style={{marginLeft:"10%"}}>
 <Buttonprops  icon={<BsFillChatLeftTextFill className="mx-2 my-0"/>} isoutline={true} msg="VIA  EMAIL FROM " ></Buttonprops>
 </div>
 <SubmitForm></SubmitForm>
      </header>
    </div>
  );
}

export default App;
