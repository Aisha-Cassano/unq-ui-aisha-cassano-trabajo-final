import { useNavigate } from 'react-router-dom';
import { useLeaderboard } from "../components/useLeaderboard.js";

import PageCardLayout from "../layouts/PageCardLayout.jsx";
import "../styles/pages/Leaderboard.css";

function Leaderboard() {
    const { entries } = useLeaderboard();

    const rows = Array.from(
        {length: 10},
        (_, index) => entries[index] || null
    );

    return (
        <PageCardLayout cardClassName="game-card" >
            <h1> Leaderboard </h1>

            <ul className="lb-list">
                {rows.map((entry, index) => (
                    <ol key={index} className="lb-stats-row">
                        <span className="nameValue">
                            {index + 1}. { entry? entry.name : "" }
                        </span>

                        <span className="dotted-row"/>

                        <span className="scoreValue">
                            { entry ? entry.score : "" }
                        </span>
                    </ol>
                ))}
            </ul>
        </PageCardLayout>
    );
}

export default Leaderboard;