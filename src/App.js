import { useState } from "react";
import "./App.css";

function App() {
  const [firstvalue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState(0);
  const [transection, setTransection] = useState("");

  const setNumber = (e) => {
    setFirstValue(String(firstvalue) + e);
  };

  const deleteFirstValue = () => {
    setFirstValue(firstvalue.slice(0, -1));
  };

  const calcFunction = (e) => {
    if(firstvalue === "" && secondValue === 0){

    } else {
      if (secondValue !== 0) {
      equilMark()
      setTransection(e);
    } else {
      setSecondValue(Number(firstvalue));
      setFirstValue("");
      setTransection(e);
    }
    }
    
  };

  const equilMark = () => {
    let a = secondValue;
    let b = Number(firstvalue);

    if (transection === "+") {
      setSecondValue(a + b);
    }
    if (transection === "-") {
      setSecondValue(a - b);
    }
    if (transection === "*") {
      setSecondValue(a * b);
    }
    if (transection === "/") {
      setSecondValue(a / b);
    }

    setFirstValue("");
    setTransection("");
  };

  const deleteAll = () => {
    setFirstValue("");
    setSecondValue(0);
    setTransection("");
  };
  return (
    <div className="App">
      <div className="contain">
        <p className="par">{secondValue}</p>
        <p className="par">{firstvalue}</p>
        <p className="par2">{transection}</p>

        <div className="flexx">
          <button
            onClick={() => setNumber(1)}
            className="btn btn-primary buttons"
          >
            1
          </button>
          <button
            onClick={() => setNumber(2)}
            className="btn btn-primary buttons"
          >
            2
          </button>
          <button
            onClick={() => setNumber(3)}
            className="btn btn-primary buttons"
          >
            3
          </button>
          <button
            onClick={() => calcFunction("+")}
            className="btn btn-primary buttons"
          >
            +
          </button>
        </div>
        <div className="flexx">
          <button
            onClick={() => setNumber(4)}
            className="btn btn-primary buttons"
          >
            4
          </button>
          <button
            onClick={() => setNumber(5)}
            className="btn btn-primary buttons"
          >
            5
          </button>
          <button
            onClick={() => setNumber(6)}
            className="btn btn-primary buttons"
          >
            6
          </button>
          <button
            onClick={() => calcFunction("-")}
            className="btn btn-primary buttons"
          >
            -
          </button>
        </div>
        <div className="flexx">
          <button
            onClick={() => setNumber(7)}
            className="btn btn-primary buttons"
          >
            7
          </button>
          <button
            onClick={() => setNumber(8)}
            className="btn btn-primary buttons"
          >
            8
          </button>
          <button
            onClick={() => setNumber(9)}
            className="btn btn-primary buttons"
          >
            9
          </button>
          <button
            onClick={() => calcFunction("*")}
            className="btn btn-primary buttons"
          >
            *
          </button>
        </div>
        <div className="flexx">
          <button
            onClick={() => {
              if (firstvalue.includes(".")) {
              } else {
                setNumber(".");
              }
            }}
            className="btn btn-primary buttons"
          >
            .
          </button>
          <button
            onClick={() =>{ if(Number(firstvalue) !== 0){ setNumber("0")} }}
            className="btn btn-primary buttons"
          >
            0
          </button>
          <button
            onClick={() =>{ if(Number(firstvalue) !== 0){ setNumber("00")} }}
            className="btn btn-primary buttons"
          >
            00
          </button>
          <button
            onClick={() => calcFunction("/")}
            className="btn btn-primary buttons"
          >
            /
          </button>
        </div>
        <div className="flexx">
          <button
            onClick={() => {
              deleteAll();
            }}
            className="btn btn-primary buttons"
          >
            ce
          </button>
          <button
            onClick={() => {
              deleteFirstValue();
            }}
            className="btn btn-primary buttons"
          >
            delete
          </button>
          <button
            onClick={() =>{ if(Number(firstvalue) !== 0){ setNumber("000")} }}
            className="btn btn-primary buttons"
          >
            000
          </button>
          <button
            onClick={() => equilMark()}
            className="btn btn-primary buttons"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
