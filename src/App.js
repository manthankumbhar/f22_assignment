import { Route, Routes } from "react-router";
import "./App.scss";
import Form from "./components/Form/Form";
import Landing from "./components/Landing/Landing";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </div>
  );
}
