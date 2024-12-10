import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HobbiesOrInterests() {
    return(
        <div> 
            <Routes>
                <Route path="/" />
            </Routes>
            <Link to="/">Home</Link>
        </div>
    )
}

export default HobbiesOrInterests;