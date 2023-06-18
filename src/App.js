import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import SongDescription from "./components/songDescription/songDescription";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/desc" element={<SongDescription/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
