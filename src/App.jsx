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
        <h2>
          
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/AboutMe">About Me</Link></li>
            <li><Link to="/ContactMeForm">Contact Me</Link></li>
            <li><Link to="/HobbiesOrInterests">Hobbies and Interests</Link></li>
            <li><Link to="/ProjectsOrPortfolios">Projects and Portfolios</Link></li>
            <li><Link to="/WorkHistory">Work History</Link></li>
          
        </h2>
        
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
      <a class="centeredText">This website is not copyrighted</a>
      <a class="FlexedItem">
      <a href="https://www.linkedin.com/in/garrett-kennedy-103995288/" class="FooterLinksCSS">LinkedIn Profile URL</a>
        <a class="FooterLinksCSS"><Link to="/home">Home</Link></a>
        <a class="FooterLinksCSS"><Link to="/AboutMe">About Me</Link></a>
        <a class="FooterLinksCSS"><Link to="/ContactMeForm">Contact Me</Link></a>
        <a class="FooterLinksCSS"><Link to="/HobbiesOrInterests">Hobbies and Interests</Link></a>
        <a class="FooterLinksCSS"><Link to="/ProjectsOrPortfolios">Projects and Portfolios</Link></a>
        <a class="FooterLinksCSS"><Link to="/WorkHistory">Work History</Link></a>
      </a>
        
        
      </footer>
      
    </div>
  );
}

export default App;
