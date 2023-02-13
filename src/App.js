import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import './stlyes.css';
import styles from './App.module.css';
import Detail from './routes/Detail';
import Home from './routes/Home';
function App() {
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <Link to={'/'}>MARVEL CHARCTER SHEET</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
