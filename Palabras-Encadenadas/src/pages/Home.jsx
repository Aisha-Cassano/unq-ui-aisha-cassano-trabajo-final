import { useNavigate  } from 'react-router-dom';

import PageCardLayout from "../layouts/PageCardLayout.jsx";
import "../styles/components/Buttons.css";


function Home() {

    const navigate = useNavigate();

    return (
        <PageCardLayout>
            <h1> PALABRAS ENCADENADAS </h1>
            <p> Formá la cadena más larga de palabras posibles antes de que se te acabe el tiempo. </p>

            <div>
                <button className="btn-secondary" onClick={() => navigate("/game")}> JUGAR</button>
                <button className="btn-secondary" onClick={() => navigate("/leaderboard")}> LEADERBOARD</button>
            </div>
        </PageCardLayout>
    );
}

export default Home;