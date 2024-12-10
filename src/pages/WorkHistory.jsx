import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function WorkHistory() {
    return(
        <div>
            <Routes>
                <Route path="/" />
            </Routes>
            <Link to="/">Home</Link>
        </div>
    )
}

export default WorkHistory;