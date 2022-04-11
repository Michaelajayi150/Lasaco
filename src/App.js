import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepartmentList from "./components/DepartmentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="deptlist" element={<DepartmentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
