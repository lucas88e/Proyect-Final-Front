import React from "react";
import ReactSwitch from "react-switch";
import { useState } from 'react';
import { useThemeContext } from "../context/ThemeContext";

function SwitchButton (){
        const{theme,setTheme} = useThemeContext()
        const [checked,setChecked] = useState(true)
    const handleSwitch = (nextChecked) =>{
        setTheme((state)=>(state==="light" ? "dark":"light" ))
        setChecked(nextChecked)
    }
    return(
        <div className={`App ${theme}`}>
        <header >
      
        <ReactSwitch
        onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
          label="Dark"
        />  </header>
        <h6>Mode {theme}</h6>
        </div>
    )
}

export default SwitchButton


