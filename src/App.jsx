import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Overview from "./components/Overview/Overview";
import Monitors from "./components/Monitors/Monitors";
export default function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" Component={Overview} />
          <Route path="/overview" Component={Overview} />
          <Route path="/monitors" Component={Monitors} />
        </Routes>
      </div>
    </>
  );
}
