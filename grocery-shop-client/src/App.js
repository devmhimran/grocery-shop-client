import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderNav from './component/HeaderNav/HeaderNav';

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
       <Routes>
        <Route path="/" element={} />
        <Route path="about" element={} />
      </Routes>
    </div>
  );
}

export default App;
