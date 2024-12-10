import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

async function ProjectsOrPortfolios() {
    return(
        <div> 
            <Routes>
                <Route path="/" />
            </Routes>
            <Link to="/">Home</Link>
            <br></br>
            <br></br>
            <a>This is a list of my projects:
                <br></br>
                <a href="https://github.com/uprighted-learners/unit-1-project-jeopardy-RolusC5B">Jeopardy Project</a>
                <br></br>
                <a href="https://github.com/uprighted-learners/unit-2-project-guess-the-number-RolusC5B">Guess The Number Project</a>
                <br></br>
                <a href="https://github.com/uprighted-learners/unit-3-project-zorkington-RolusC5B">Zorkington Project</a>
                <br></br>
                <a href="https://github.com/uprighted-learners/unit-5-project-server-blog-RolusC5B">Server Blog Project</a>
                <br></br>
                <a href="https://github.com/uprighted-learners/unit-6-project-react-chat-RolusC5B">React Chat Project</a>
                <br></br>
                <a href="https://github.com/Pilotjsauce/capstone-charity-platform">Capstone Project</a>
            </a>

        </div>
    )
}

export default ProjectsOrPortfolios;