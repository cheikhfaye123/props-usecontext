import { createContext, useState, useContext } from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);

    const addNumber = (number) => {
        setSelectedNumbers([...selectedNumbers, number]);
        setCurrentNumber(number);
    };

    const getTotal = () => {
        return selectedNumbers.reduce((sum, num) => sum + num, 0);
    };

    const reset = () => {
        setSelectedNumbers([]);
        setCurrentNumber(0);
    };

    return (
        <CalculatorContext.Provider
            value={{
                selectedNumbers,
                currentNumber,
                addNumber,
                getTotal,
                reset
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};

export const useCalculator = () => {
    const context = useContext(CalculatorContext);
    if (!context) {
        throw new Error('error');
    }
    return context;
};