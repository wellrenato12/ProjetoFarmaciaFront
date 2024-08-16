import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}