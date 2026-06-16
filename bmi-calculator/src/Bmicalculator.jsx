import React, { useState } from "react";
import "./index.css";
function Bmicalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi,setBmi]=useState("");
    const [category,setCategory]=useState("");

    const calculateBMI=()=>{
        const heightinmeter=height/100;
        const bmivalue=weight/(heightinmeter*heightinmeter);
        setBmi(bmivalue.toFixed(2));
        if(bmivalue<18.5){
            setCategory("Underweight");
        }else if(bmivalue<25){
            setCategory("Normal weight");
        }else if(bmivalue<30){
            setCategory("Overweight");
        }else{
            setCategory("Obese");
        }
    };

    return (
        <div>
            <h1>BMI Calculator</h1>
            <input type="number" placeholder="Enter height (cm)"  value={height} onChange={(e) => setHeight(e.target.value)}/>
            &nbsp;&nbsp;
            <input type="number" placeholder="Enter weight(kg)" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
            <br>
            </br>
            <br></br>
            <button onClick={calculateBMI}>Calculate BMI</button>
            <br></br>
            <br/>
            <h2>BMI: {bmi}</h2>
            <h2>Category: {category}</h2>

        </div>
    );
}
export default Bmicalculator;