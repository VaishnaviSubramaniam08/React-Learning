import React,{useState} from "react";
import "./index.css";
function ColorPicker(){
    const [color,setColor]=useState("#ffffff");
    return (
        <div  style={{
  backgroundColor: color
}}>
            <h1>Color Picker</h1>
            <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
            <h2>Selected Color :{ color} </h2>
        </div>
    );
}
export default ColorPicker;