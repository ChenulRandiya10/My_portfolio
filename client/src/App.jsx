import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Messages from './pages/Messages';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SpeedInsights />
      <div style={{ paddingTop: '92px', scrollPaddingTop: '110px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <SpeedInsights />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
