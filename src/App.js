import './App.css';
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import LogIn from "./pages/LogIn/LogIn";


function App() {
  return (
      <Routes>
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
  );
}

export default App;
