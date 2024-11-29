import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
            <Route path="/AboutMe" element={<AboutMe/>}>About Me</Route>
            <Route path="/ContactMeForm" element={<ContactMeForm/>}>Contact Me</Route>
            <Route path="/HobbiesOrInterests" element={<HobbiesOrInterests/>}>Hobbies and Interests</Route>
            <Route path="/ProjectsOrPortfolios" element={<ProjectsOrPortfolios/>}>Projects and Portfolios</Route>
            <Route path="/WorkHistory" element={<WorkHistory/>}>Work History</Route>
          </Routes>
    
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
