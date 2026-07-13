import { useState } from "react";
import { useWordChain } from "../components/useWordChain.js";
import {useGame} from "../components/useGame.js";

function Game() {
    const [word, setWord] = useState("");
    const {
        wordChain,
        msg,
        score,
        lastWord,
        timeLeft,
        gameOver,
        submitWord,
        resetGame } = useGame();


    const handleSubmitWord = async () => {
        await submitWord(word);
        setWord("");
    };

    const handleResetGame = () => {
        resetGame();
        setWord("");
    };

    return (
        <div>
            <h1>Game</h1>

            <p> Palabra anterior: {lastWord || "-" } </p>
            <p> Puntaje: {score} </p>
            <p> Tiempo: {timeLeft || "-"} </p>

            {gameOver ? (
                <div>
                    <p> PARTIDA TERMINADA </p>
                    <p> Cantidad de palabras: {wordChain.length} </p>
                    <button onClick={handleResetGame}> Nuevo intento </button>
                </div>
            ) : (
                <>
                    <input
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        placeholder="escribí una palabra"
                    />
                    <button onClick={handleSubmitWord}> Enviar </button>
                    {msg && <p>{msg}</p>}
                </>
                )}

            <p> Cadena: {wordChain.join(" -> ")} </p>

        </div>
    );
}

export default Game;