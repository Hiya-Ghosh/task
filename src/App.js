import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Main from "./components/Main.js";
import Create from "./components/Create.js";
import Approved from "./components/Approved.js";
import Pending from "./components/Pending.js";
import User from "./components/User.js";
import Permit from "./components/Permit.js";
import Others from "./components/Others.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Approved" element={<Approved />} />
          <Route path="/Pending" element={<Pending />} />
          <Route path="/User" element={<User />} />
          <Route path="/Permit" element={<Permit />} />
          <Route path="/Others" element={<Others />} />

        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
