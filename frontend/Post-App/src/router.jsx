import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Header";
import ListPostagens from "./Components/ListPostagens";
import Posts from "./Components/Posts";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Home />} />
                <Route path="/ListPostagens" element={<ListPostagens />} />
                <Route path="/" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    );
}
