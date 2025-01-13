import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { TransactionPage } from './pages/TransactionPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
