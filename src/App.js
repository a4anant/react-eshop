import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./component/Checkout";
import Login from "./component/Login";

function App() {
  return (
    <div className="container-fluid">      
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
