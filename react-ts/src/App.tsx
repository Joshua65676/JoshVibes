import "./App.css"
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom"
import WelcomePage from "./components/WelcomePage";
import SignUpArtist from "./components/SignUpArtist";
import SignUpListener from "./components/SignUpListener";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signupartist" element={<SignUpArtist />} />
        <Route path="/signuplistener" element={<SignUpListener />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
