import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
