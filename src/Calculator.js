import React, { useState } from "react";

const Calculator = () => {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const validateInput = () => {
        if (input1 === "" || input2 === "" || isNaN(input1) || isNaN(input2)) {
            setError("Please Enter Valid Numbers")
            return false;
        }
        setError(null);
        return true;
    }

    const add = () => {
        if (validateInput()) {
            setResult(parseFloat(input1) + parseFloat(input2));
        }
    };
    const subtract = () => {
        if (validateInput()) {
            setResult(parseFloat(input1) - parseFloat(input2));
        }
    };
    const multiply = () => {
        if (validateInput()) {
            setResult(parseFloat(input1) * parseFloat(input2));
        }
    };
    const divide = () => {
        if(validateInput()){
            if(input2!=="0"){
                setResult(parseFloat(input1) / parseFloat(input2))
            }
            else{
                setError("Division By Zero Is Not Allowed!")
            }
        }
    };

    return (
        <div className="calculator">

            <h1>React Calculator</h1>
            <div className="input">
            <input type="text" value={input1} onChange={e=>setInput1(e.target.value)} placeholder="NUM 1"/>
            <input type="text" value={input2} onChange={e=>setInput2(e.target.value)} placeholder="NUM 1"/>
            </div>

            <div className="buttons">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={divide}>/</button>
            </div>

            {error && <div className="error">{error}</div>}
            {result != null && <div className="success">Result:{result}</div>}

        </div>
    )
}

export default Calculator