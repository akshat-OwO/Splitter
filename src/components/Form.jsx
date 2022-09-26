import { useState } from 'react';
import dollar from '../assets/images/icon-dollar.svg';
import person from '../assets/images/icon-person.svg';

const Form = ({ bill, setBill, tip, setTip, people, setPeople }) => {

    const [isCustomSelected, setIsCustomSelected] = useState(false);

    const handleSelectedTip = (e) => {
        setTip(+e.target.value);
        setIsCustomSelected(e.target.value === "" ? false : true);
    }

    return (
        <div className="form">
            <div className="label-group">
                <div className="label-wrapper">
                    <label className='label' htmlFor="bill">Bill</label>
                </div>
                <div className="number-wrapper">
                    <input type="number" className="number-input" name="" id="bill" onInput={(e) => setBill(+e.target.value)} value={bill} />
                    <img src={dollar} aria-hidden="true" className="icon" />
                </div>
            </div>

            <div className="tip-section">
                <p className="label">Selected Tip %</p>
                <div className="tip-amount-wrapper">
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} name='tip' className="tip-input" id='input1' value="5" />
                        <label className="tip-btn" htmlFor="input1">5%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} name='tip' className="tip-input" id='input2' value="10" />
                        <label className="tip-btn" htmlFor="input2">10%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} name='tip' className="tip-input" id='input3' value="15" />
                        <label className="tip-btn" htmlFor="input3">15%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} name='tip' className="tip-input" id='input4' value="25" />
                        <label className="tip-btn" htmlFor="input4">25%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} name='tip' className="tip-input" id='input5' value="50" />
                        <label className="tip-btn" htmlFor="input5">50%</label>
                    </div>
                    <div className="custom-wrapper">
                        <input type="number" id='custom' className='tip-custom number-input' onInput={handleSelectedTip} placeholder="Custom" />
                        <label htmlFor="custom" className='tip-custom-label'>Custom</label>
                    </div>
                </div>
            </div>

            <div className="label-group">
                <div className="label-wrapper">
                    <label className='label' htmlFor="people">Number of People</label>
                    <p className='error'>{
                        people === 0 ? "Can't be zero" : ""
                    }</p>
                </div>
                <div className="number-wrapper">
                    <input type="number" className={`number-input ${people === 0 ? "number-error" : ""}`} name="" id="people" onInput={(e) => setPeople(+e.target.value)} value={people} />
                    <img src={person} aria-hidden="true" className="icon" />
                </div>
            </div>
        </div>
    );
}
 
export default Form;