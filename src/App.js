import React, {useState} from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [result, setResult] = useState("");

    const handleButtonChange = (e) => {
        setResult(result.concat(e.target.name))
    }

    const handleResult = () => {
        setResult(evaluate(result));
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
                <input type="text" value={result} />
            </form>

            <div className="keypad">
                <button onClick={clear}>Clear</button>
                <button onClick={deleteNum}>C</button>
                <button name="/" onClick={handleButtonChange}>&divide;</button>
                <button name="7" onClick={handleButtonChange}>7</button>
                <button name="8" onClick={handleButtonChange}>8</button>
                <button name="9" onClick={handleButtonChange}>9</button>
                <button name="*" onClick={handleButtonChange}>&times;</button>
                <button name="4" onClick={handleButtonChange}>4</button>
                <button name="5" onClick={handleButtonChange}>5</button>
                <button name="6" onClick={handleButtonChange}>6</button>
                <button name="-" onClick={handleButtonChange}>&ndash;</button>
                <button name="1" onClick={handleButtonChange}>1</button>
                <button name="2" onClick={handleButtonChange}>2</button>
                <button name="3" onClick={handleButtonChange}>3</button>
                <button name="+" onClick={handleButtonChange}>+</button>
                <button name="0" onClick={handleButtonChange}>0</button>
                <button name="." onClick={handleButtonChange}>.</button>
                <button onClick={handleResult}>=</button>
            </div>
        </div>
    )
}

export default App
