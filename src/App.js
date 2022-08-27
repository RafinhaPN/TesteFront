import HomeProdutos from './pages/Modal/Home';
import { Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeProdutos />} />
      </Routes>
    </div>
  );
}

export default App;
