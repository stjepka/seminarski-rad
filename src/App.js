import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import LogIn from "./pages/LogIn/LogIn";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
