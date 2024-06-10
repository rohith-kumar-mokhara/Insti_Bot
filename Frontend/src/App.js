import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx"
import Feedback from "./pages/Feedback.tsx"
import InstiBot from "./pages/InstiBot.tsx"
import Faqs from "./pages/Faq.tsx"
import Login from "./pages/Login.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chatbot' element={<InstiBot/>} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path="/login" element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
