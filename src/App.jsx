import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import AboutMe from "./pages/AboutMe";
import ContactMeForm from "./pages/ContactMeForm";
import HobbiesOrInterests from "./pages/HobbiesOrInterests";
import ProjectsOrPortfolios from "./pages/ProjectsOrPortfolios";
import WorkHistory from "./pages/WorkHistory";

function App() {
  return (
    <div className="App">
      <nav>
        
        <Routes>
            <Route path="/AboutMe" element={<AboutMe/>} />
            <Route path="/ContactMeForm" element={<ContactMeForm/>} />
            <Route path="/HobbiesOrInterests" element={<HobbiesOrInterests/>} />
            <Route path="/ProjectsOrPortfolios" element={<ProjectsOrPortfolios/>} />
            <Route path="/WorkHistory" element={<WorkHistory/>} />
        </Routes>

          <Link to="/AboutMe">About Me</Link>
          <Link to="/ContactMeForm">Contact Me</Link>
          <Link to="/HobbiesOrInterests">Hobbies and Interests</Link>
          <Link to="/ProjectsOrPortfolios">Projects and Portfolios</Link>
          <Link to="/WorkHistory">Work History</Link>
                  
      </nav>
      <h1>Personal Portfolio</h1>
      <p>Say something about yourself here!</p>
      <figure>
        <picture>
          <source srcSet="https://www.fillmurray.com/g/300/400" />
          <img src="https://www.fillmurray.com/g/300/400" />"
        </picture>
        <figcaption>
          Source: <a href="https://www.fillmurray.com/">www.fillmurray.com/</a>
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
