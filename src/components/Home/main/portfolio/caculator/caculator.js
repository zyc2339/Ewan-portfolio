import { useState, useEffect } from "react";
import "./caculator.css";
const Caculator = () => {
  const [result, setResult] = useState(0);
  const [buffer, setBuffer] = useState("0");
  const [previousOperator, setPreviousOperator] = useState(null);
  const [screen, setScreen] = useState("0");

  //const screen = document.querySelector(".screen");

  // when click button get the number or symbol
  const buttonClick = (e) => {
    getValue(e.target.innerText);
    console.log(e.target.innerText);
  };

  //if get number run function........if get symbol run symbol function
  const getValue = (v) => {
    if (isNaN(v)) {
      handleSymbol(v);
    } else {
      handleNumber(v);
    }

    setScreen({ buffer });
  };

  //number function shows buffer on the screen:
  const handleNumber = (v) => {
    //if beginning is 0, change nothing
    if (buffer === "0") {
      setBuffer(v);
    }
    //   let newBuffer = buffer + v;
    else setBuffer(buffer + v);
  };

  //   //calculate numbers function after have operator declaration
  //   const handleMath = (v) => {
  //     if (buffer === "0") {
  //       return;
  //     }
  //     const intBuffer = parseInt(buffer); //from string to number

  //     // let result = first number
  //     if (result === 0) {
  //       result = intBuffer;
  //     } else {
  //       //let first result  go to calculation again
  //       handleOperator(intBuffer);
  //     }
  //     previousOperator = v;

  //     buffer = "0";
  //   };

  //   const handleOperator = (v) => {
  //     if (previousOperator === "+") {
  //       result += v;
  //     } else if (previousOperator === "-") {
  //       result -= v;
  //     } else if (previousOperator === "×") {
  //       result *= v;
  //     } else if (previousOperator === "÷") {
  //       result /= v;
  //     }
  //     console.log(result);
  //   };

  //   const handleSymbol = (v) => {
  //     switch (v) {
  //       case "C":
  //         buffer = "0";
  //         result = 0;
  //         previousOperator = null;
  //         break;
  //       case "←":
  //         if (buffer.length > 1) {
  //           buffer = buffer.substring(0, buffer.length - 1);
  //         } else buffer = "0";
  //         break;
  //       case "+":
  //       case "-":
  //       case "×":
  //       case "÷":
  //         handleMath(v);
  //         break;

  //       case "=":
  //         if (previousOperator === null) {
  //           //make sure there are 2 numbers
  //           return;
  //         } else {
  //           handleOperator(parseInt(buffer)); // operator with 2nd number
  //           previousOperator = null;
  //           buffer = result; // show on the screen
  //         }

  //         console.log(result);
  //     }
  //   };
  return (
    <div className="calc">
      <section className="screen">{screen}</section>

      <section className="calc-buttons">
        <div className="calc-button-row">
          <button className="calc-button double" onClick={buttonClick}>
            C
          </button>
          <button className="calc-button" onClick={buttonClick}>
            ←
          </button>
          <button className="calc-button" onClick={buttonClick}>
            ÷
          </button>
        </div>
        <div className="calc-button-row">
          <button className="calc-button" onClick={buttonClick}>
            7
          </button>
          <button className="calc-button" onClick={buttonClick}>
            8
          </button>{" "}
          <button className="calc-button" onClick={buttonClick}>
            9
          </button>
          <button className="calc-button" onClick={buttonClick}>
            ×
          </button>
        </div>
        <div className="calc-button-row">
          <button className="calc-button" onClick={buttonClick}>
            4
          </button>
          <button className="calc-button" onClick={buttonClick}>
            5
          </button>
          <button className="calc-button" onClick={buttonClick}>
            6
          </button>
          <button className="calc-button" onClick={buttonClick}>
            -
          </button>
        </div>
        <div className="calc-button-row">
          <button className="calc-button" onClick={buttonClick}>
            1
          </button>
          <button className="calc-button" onClick={buttonClick}>
            2
          </button>
          <button className="calc-button" onClick={buttonClick}>
            3
          </button>
          <button className="calc-button" onClick={buttonClick}>
            +
          </button>
        </div>
        <div className="calc-button-row">
          <button className="calc-button triple" onClick={buttonClick}>
            0
          </button>
          <button className="calc-button" onClick={buttonClick}>
            {" "}
            ={" "}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Caculator;
