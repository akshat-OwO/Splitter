import { useState } from 'react';

// import image
import logo from "./assets/images/logo.svg";

// components
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [billAmt, setBillAmt] = useState(0);
  const [showBillAmtError, setShowBillAmtError] = useState(false);
  const [peeps, setPeeps] = useState(0);
  const [showPeepsError, setShowPeepsError] = useState(false);
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(0);
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [calculatedTotal, setCalculatedTotal] = useState(0);

  const calculateTip = () => {
    setCalculatedTip(billAmt * selectedTip / peeps);
    console.log(calculatedTip);
  }

  const handleBillAmtInput = (e) => {
    const input = e.target.value;
    // TODO: handle pattern
    // const pattern = /^[0-9]*$/;
    // if (pattern.test(input)) {
    //   setShowBillAmtError(false);
    //   setBillAmt(input);
    // } else {
      //   setShowBillAmtError(true);
      // }
        setBillAmt(input);
        calculateTip();
  }

  const handleSelectedTip = (e) => {
    setSelectedTip(e.target.value);
  }

  const handlePeepsAmtInput = (e) => {
    const input = e.target.value;
    // const pattern = /^[0-9]$/;
    // if (pattern.test(input)) {
    //   setShowPeepsError(false);
    //   setPeeps(input);
    // } else {
    //   setShowPeepsError(true);
    // }
    setPeeps(input);
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter logo" />
      <div className="container">
        <Form 
          billAmt={billAmt}
          handleBillAmtInput={handleBillAmtInput}
          handleSelectedTip={handleSelectedTip}
          showBillAmtError={showBillAmtError}
          handlePeepsAmtInput={handlePeepsAmtInput}
          peeps={peeps}
          showPeepsError={showPeepsError}
        />
        <Display />
      </div>
    </div>
  )
}

export default App
