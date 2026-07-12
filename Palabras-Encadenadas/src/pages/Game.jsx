import { useState } from "react";
import { useWordChain } from "../hooks/useWordChain.jsx";

function Game() {
    const [word, setWord] = useState("");
    const { wordChain,
            msg,
            score,
            submitWord,
            lastWord,
            lastLetter } = useWordChain();


    const handleSubmit = async () => {
        await submitWord(word);
        setWord("");
    };

    return (
        <div style={{ backgroundColor: "lightgreen", minHeight: "100vh" }}>
            <h1>Game</h1>

            <p> Palabra anterior: {lastWord || "-" } </p>
            <p> Puntaje: {score} </p>

            <input
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="escribí una palabra"
            />
            <button onClick={handleSubmit}> Enviar </button>
            {msg && <p>{msg}</p>}
            <p> Cadena: {wordChain.join(" -> ")} </p>

        </div>
    );
}

export default Game;