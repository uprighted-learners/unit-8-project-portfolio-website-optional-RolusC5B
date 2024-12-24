import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import AboutMe from "./pages/AboutMe";
import ContactMeForm from "./pages/ContactMeForm";
import HobbiesOrInterests from "./pages/HobbiesOrInterests";
import ProjectsOrPortfolios from "./pages/ProjectsOrPortfolios";
import WorkHistory from "./pages/WorkHistory";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <nav>
        <headers>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/AboutMe">About Me</Link></li>
            <li><Link to="/ContactMeForm">Contact Me</Link></li>
            <li><Link to="/HobbiesOrInterests">Hobbies and Interests</Link></li>
            <li><Link to="/ProjectsOrPortfolios">Projects and Portfolios</Link></li>
            <li><Link to="/WorkHistory">Work History</Link></li>
          </ul>
        </headers>
        
        <Routes>
            <Route path="/AboutMe" element={<AboutMe/>} />
            <Route path="/ContactMeForm" element={<ContactMeForm/>} />
            <Route path="/HobbiesOrInterests" element={<HobbiesOrInterests/>} />
            <Route path="/ProjectsOrPortfolios" element={<ProjectsOrPortfolios/>} />
            <Route path="/WorkHistory" element={<WorkHistory/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
      
      </nav>
      <footer class="footer">
        <li><a>This page is not website is not copyrighted</a></li>
        <li><a href="https://www.linkedin.com/in/garrett-kennedy-103995288/">LinkedIn Profile URL</a></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/AboutMe">About Me</Link></li>
        <li><Link to="/ContactMeForm">Contact Me</Link></li>
        <li><Link to="/HobbiesOrInterests">Hobbies and Interests</Link></li>
        <li><Link to="/ProjectsOrPortfolios">Projects and Portfolios</Link></li>
        <li><Link to="/WorkHistory">Work History</Link></li>
      </footer>
      
    </div>
  );
}

export default App;
