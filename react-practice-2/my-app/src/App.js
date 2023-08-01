import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </div>
  );
}

export default App;
