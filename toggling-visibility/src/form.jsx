import { useState, useRef } from "react";

const Form = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleClick = () => {
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }
      
  
    return (
      <div>
        <input type="text" ref={emailRef} />
        <br/>
        <input type="text" ref={passwordRef}/>
        <br/>
        <button onClick={handleClick}>Reset Input</button>
      </div>
    );
}

export default Form;