import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorProvider } from './context/CalculatorContext';
import Calculator from './components/Calculator';
import Result from './components/Result';
import './App.css';

function App() {
  return (
    <div className="app">
      <CalculatorProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/resultado" element={<Result />} />
          </Routes>
        </Router>
      </CalculatorProvider>
    </div>
  );
}

export default App;