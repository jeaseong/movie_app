import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/:coinId" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </Router>
  );
}

export default Routers;
