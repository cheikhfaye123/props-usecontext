import { useCalculator } from '../context/CalculatorContext';
import { Link } from 'react-router-dom';
import '../App.css';

const Calculator = () => {
    const { currentNumber, addNumber } = useCalculator();

    return (
        <div className="calculator">
            <div className="display">
                {currentNumber}
            </div>
            <div className="buttons-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
                    <button
                        key={number}
                        onClick={() => addNumber(number)}
                        className="number-button"
                    >
                        {number}
                    </button>
                ))}
            </div>
            <Link to="/resultado" className="result-link">
                Ver Resultado
            </Link>
        </div>
    );
};

export default Calculator;