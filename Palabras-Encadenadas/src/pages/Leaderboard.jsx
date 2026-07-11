import { Link } from 'react-router-dom';

function Leaderboard() {
    return (
        <div style={{ backgroundColor: "#35374B"}}>
            <h1> PALABRAS ENCADENADAS </h1>
            <Link to="/"> menu </Link>
            <br />
            <Link to="/game"> jugar </Link>
        </div>
    );
}

export default Leaderboard;