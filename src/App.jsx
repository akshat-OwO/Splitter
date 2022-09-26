import { useEffect, useState } from 'react';

// import image
import logo from "./assets/images/logo.svg";

// components
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.table({bill, people, tip});
    if ( bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip(bill * (tip / 100));
      setTotal(calculatedTip + bill);
    }
  }, [bill, people, tip, calculatedTip]);

  const handleResetBtn = (e) => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter logo" />
      <div className="container">
        <Form 
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Display 
          total={total}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
          people={people}
        />
      </div>
    </div>
  )
}

export default App
