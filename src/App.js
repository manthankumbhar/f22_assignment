import { Route, Routes } from "react-router";
import "./App.scss";
import Landing from "./components/Landing/Landing";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}
