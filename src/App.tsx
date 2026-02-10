import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import { Store } from './pages/Store';



function App() {
  return (
    <div className="App">
          <Navbar/>
      <Container>
        </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>  
  )
}

export default App