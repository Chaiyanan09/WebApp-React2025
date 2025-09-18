import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Bmi from './Bmi';
import Hello from './Hello';
import Home from './Home';
import List from './List';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Welcome to my Website</h1>

        <div>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to="/bmi">Bmi Calculator</Link></li>
            <li><Link to="/hello">Hello</Link></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<List />}/>
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
