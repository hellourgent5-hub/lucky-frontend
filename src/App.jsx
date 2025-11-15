import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
