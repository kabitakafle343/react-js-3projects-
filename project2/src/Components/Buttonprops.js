import React from 'react';
import './Buttonprops.css' 
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {IoMdCall} from "react-icons/io"

const Buttonprops = (props) => {
  return (
    <div>
      <button className={props.isoutline?"white":"black"} isbuttonid={true} >{props.icon}{props.msg}
</button>
    </div>
  )
}

export default Buttonprops
