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
    <div className="min-h-full h-auto w-full bg-[#00d400]">
      <h2 className="flex justify-around bg-[#00fd00] border-[1px] border-[solid] border-[black] pb-[10px] pt-[3px] w-full">
            <li className="[list-style:none] inline-block m-[1em]"><Link to="/">Home</Link></li>
            <li className="[list-style:none] inline-block m-[1em]"><Link to="/AboutMe">About Me</Link></li>
            <li className="[list-style:none] inline-block m-[1em]"><Link to="/ContactMeForm">Contact Me</Link></li>
            <li className="[list-style:none] inline-block m-[1em]"><Link to="/HobbiesOrInterests">Hobbies and Interests</Link></li>
            <li className="[list-style:none] inline-block m-[1em]"><Link to="/ProjectsOrPortfolios">Projects and Portfolios</Link></li>
            <li className="[list-style:none] inline-block m-[1em]"><Link to="/WorkHistory">Work History</Link></li>
        </h2>
      <nav className="[list-style:none] inline-block m-[1em]">
        
        <Routes>
            <Route path="/AboutMe" element={<AboutMe/>} />
            <Route path="/ContactMeForm" element={<ContactMeForm/>} />
            <Route path="/HobbiesOrInterests" element={<HobbiesOrInterests/>} />
            <Route path="/ProjectsOrPortfolios" element={<ProjectsOrPortfolios/>} />
            <Route path="/WorkHistory" element={<WorkHistory/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
      </nav>
      
      <footer className="flex-shrink-0 w-full bottom-[0] mt-[10px] pt-[20px] pb-[20px] border-[1px] border-[solid] border-[black] bg-[#00fd00]">
        <a className="p-px">This website is not copyrighted</a>
        <a className="flex justify-around">
          <a href="https://www.linkedin.com/in/garrett-kennedy-103995288/" className="mt-[20px] ml-[10px] mr-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-[1px] border-[solid] border-[black]">LinkedIn Profile URL</a>
          <a className="mt-[20px] ml-[5px] mr-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-[1px] border-[solid] border-[black]"><Link to="/">Home</Link></a>
          <a className="mt-[20px] ml-[5px] mr-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-[1px] border-[solid] border-[black]"><Link to="/AboutMe">About Me</Link></a>
          <a className="mt-[20px] ml-[5px] mr-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-[1px] border-[solid] border-[black]"><Link to="/ContactMeForm">Contact Me</Link></a>
          <a className="mt-[20px] ml-[5px] mr-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-[1px] border-[solid] border-[black]"><Link to="/HobbiesOrInterests">Hobbies and Interests</Link></a>
          <a className="mt-[20px] ml-[5px] mr-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-[1px] border-[solid] border-[black]"><Link to="/ProjectsOrPortfolios">Projects and Portfolios</Link></a>
          <a className="mt-[20px] ml-[10px] mr-[10px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] border-[1px] border-[solid] border-[black]"><Link to="/WorkHistory">Work History</Link></a>
        </a>
      </footer>
    </div>
  );
}

export default App;
