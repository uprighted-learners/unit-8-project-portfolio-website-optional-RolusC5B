import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function AboutMe() {
    return(
        <div>

            <Routes>
                <Route path="/" />
            </Routes>
            <Link to="/">Home</Link>

            <br></br>
            <br></br>
            <a>My hobbies are video games and reading, I grew up in Bennington Vermont, and I was inspired to get into programming when I was young where I had a little robotic vehicle that you plugged into the computer and had to hand copy code that entirely machine language in that it was made up of 1's and 2's.</a>
            <br></br>
            <a>I eventually took actual coding classes and found that I both had a talent for C++ and that I was able to immerse myself in the process of coding, I also enjoyed the satisfaction of successfully completing a program. All of these aspects are what got me into programming.</a>
            <br></br>
            <br></br>
        </div>
    )
}

export default AboutMe;