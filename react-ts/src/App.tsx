import "./App.css"
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom"
import WelcomePage from "./components/WelcomePage";
import SignUpArtist from "./components/SignUpArtist";
import SignUpListener from "./components/SignUpListener";
import LogIn from "./components/LogIn";
import EmailVerification from "./components/EmailVerification";
import ArtistHome from "./components/ArtistHome";
import ListenerHome from "./components/ListenerHome";
import Create from "./components/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signupartist" element={<SignUpArtist />} />
        <Route path="/signuplistener" element={<SignUpListener />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/artistHome" element={<ArtistHome />} />
        <Route path="/listenerHome" element={<ListenerHome />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
