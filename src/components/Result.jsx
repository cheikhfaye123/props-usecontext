import { useCalculator } from '../context/CalculatorContext';
import { Link } from 'react-router-dom';
import '../App.css';

const Result = () => {
    const { selectedNumbers, getTotal, reset } = useCalculator();

    return (
        <div className="result-container">
            <h2 className="result-title">Resultado</h2>
            <div className="result-display">
                <p>Total: {getTotal()}</p>
                <div>
                    <p>Números seleccionados:</p>
                    <div className="numbers-list">
                        {selectedNumbers.map((num, index) => (
                            <span key={index} className="number-item">
                                {num}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button onClick={reset} className="reset-button">
                    Reset
                </button>
                <Link to="/" className="back-link">
                    Volver
                </Link>
            </div>
        </div>
    );
};

export default Result;