import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './stlyes.css';
import Detail from './routes/Detail';
import Home from './routes/Home';
function App() {
  return (
    <div className='App'>
      <header>
        <Link to={'/'}>MARVEL CHARCTER SHEET</Link>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
