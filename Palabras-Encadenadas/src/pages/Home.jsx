import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ backgroundColor: "#35374B"}}>
            <h1> PALABRAS ENCADENADAS </h1>
            <Link to="/game"> jugar </Link>
            <br />
            <Link to="/leaderboard"> leaderboard </Link>
        </div>
    );
}

export default Home;