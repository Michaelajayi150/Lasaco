import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DepartmentList from "./Component/DepartmentList";
import Background from "./lasaco-bg.jpg";
import Login from "./Component/Login";

function App() {
  return (
    <div className="main" style={{ backgroundImage: `url(${Background})` }}>
      <BrowserRouter>
        <Routes>
          <Route path="/Lasaco" element={<Login />} />
          <Route path="/deptlist" element={<DepartmentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
