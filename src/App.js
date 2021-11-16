import React, {useState} from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {

    const [result, setResult] = useState("");

    const handleButtonChange = (e) => {
        setResult(result.concat(e.target.name))
    }

    const handleResult = () => {
        try {
            setResult(evaluate(result));
        } catch {
            setResult('Error');
        }
    }

    const clear = () => {
        setResult("")
    }

    const deleteNum = () => {
        setResult(result.slice(0, result.length - 1));
    }

    return (
        <div className="container">
            <form>
                <input className="result-text" type="text" value={result} />
            </form>

            <div className="keypad">
                <button className="highlight" id="clear" onClick={clear}>Clear</button>
                <button className="highlight" onClick={deleteNum}>C</button>
                <button className="highlight" name="/" onClick={handleButtonChange}>&divide;</button>
                <button name="7" onClick={handleButtonChange}>7</button>
                <button name="8" onClick={handleButtonChange}>8</button>
                <button name="9" onClick={handleButtonChange}>9</button>
                <button className="highlight" name="*" onClick={handleButtonChange}>&times;</button>
                <button name="4" onClick={handleButtonChange}>4</button>
                <button name="5" onClick={handleButtonChange}>5</button>
                <button name="6" onClick={handleButtonChange}>6</button>
                <button className="highlight" name="-" onClick={handleButtonChange}>&ndash;</button>
                <button name="1" onClick={handleButtonChange}>1</button>
                <button name="2" onClick={handleButtonChange}>2</button>
                <button name="3" onClick={handleButtonChange}>3</button>
                <button className="highlight" name="+" onClick={handleButtonChange}>+</button>
                <button name="0" onClick={handleButtonChange}>0</button>
                <button name="." onClick={handleButtonChange}>.</button>
                <button className="highlight" id="result" onClick={handleResult}>=</button>
            </div>
        </div>
    )
}

export default App
