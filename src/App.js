import './App.css';
import Home from './Home';
import SingleMovie from "./SingleMovie";
import Error from "./Error"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={< Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;