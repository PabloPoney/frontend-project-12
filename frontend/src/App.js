// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page404 } from './Components/pages/404';
import 'bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Loh</div>} />
        <Route path='login' element={<div>Pidr</div>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
