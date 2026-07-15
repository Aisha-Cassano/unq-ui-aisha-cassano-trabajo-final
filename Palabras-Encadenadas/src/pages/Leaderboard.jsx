import { useNavigate } from 'react-router-dom';
import { useLeaderboard } from "../components/useLeaderboard.js";

import PageCardLayout from "../layouts/PageCardLayout.jsx";

function Leaderboard() {
    const { entries } = useLeaderboard();

    const rows = Array.from(
        {length: 10},
        (_, index) => entries[index] || null
    );

    return (
        <PageCardLayout cardClassName="game-card" >
            <h1> Leaderboard </h1>

            <ol>
                {rows.map((entry, index) => (
                    <li key={index}>
                        <span>{index + 1}</span>
                        <span>{entry ? entry.name : ""}</span>
                        <span>{entry ? entry.score : ""}</span>
                    </li>
                ))}
            </ol>
        </PageCardLayout>
    );
}

export default Leaderboard;