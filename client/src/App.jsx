import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Messages from './pages/Messages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: '92px', scrollPaddingTop: '110px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
