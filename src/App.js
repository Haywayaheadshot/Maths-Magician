import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
