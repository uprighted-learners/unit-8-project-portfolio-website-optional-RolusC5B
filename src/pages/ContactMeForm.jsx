import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ContactMeForm() {
    return(
        <div>
            <Routes>
                <Route path="/" />
            </Routes>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ContactMeForm;