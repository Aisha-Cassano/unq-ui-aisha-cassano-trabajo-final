import { Link } from 'react-router-dom';

function Game() {
    return (
        <div style={{ backgroundColor: "#35374B"}}>
            <h1> PALABRAS ENCADENADAS </h1>
            <Link to="/"> menu </Link>
            <br />
            <Link to="/leaderboard"> leaderboard </Link>
        </div>
    );
}

export default Game;