import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx"
import Game from "./pages/Game.jsx"
import Leaderboard from  "./pages/Leaderboard.jsx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;