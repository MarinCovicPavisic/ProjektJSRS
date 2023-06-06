import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Naslovna from './Components/Naslovna';
import Povijest from './Components/Povijest';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <center>
        <Header />
        <br/>
        <Router>
          <Routes>
            <Route element={<Naslovna />} path='/'></Route>
            <Route element={<Povijest />} path='/povijest'></Route>
          </Routes>
        </Router>
        <Footer />
      </center>
    </div>
  );
}

export default App;