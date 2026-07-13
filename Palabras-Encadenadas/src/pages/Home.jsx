import { useNavigate  } from 'react-router-dom';
import "../styles/pages/Home.css"

function Home() {

    const navigate = useNavigate();

    return (
        <div className= "home-view">
            <div className="home-card">
                <h1> PALABRAS ENCADENADAS </h1>
                <p> Formá la cadena más larga de palabras posibles antes de que se te acabe el tiempo. </p>

                <div>
                    <button className="btn-secondary" onClick={ () => navigate("/game")}> JUGAR </button>
                    <button className="btn-secondary" onClick={ () => navigate("/game")}> LEADERBOARD </button>
                </div>

            </div>
        </div>
    );
}

export default Home;