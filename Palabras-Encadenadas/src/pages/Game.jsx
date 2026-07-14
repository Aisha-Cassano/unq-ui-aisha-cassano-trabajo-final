import { useState } from "react";
import { useWordChain } from "../components/useWordChain.js";
import { useGame } from "../components/useGame.js";

import PageCardLayout from "../layouts/PageCardLayout.jsx";
import "../styles/pages/Game.css";
import "../styles/components/Buttons.css";

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

    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            handleSubmitWord();
        }
    }

    return (
        <PageCardLayout cardClassName="game-card" >
            <h1>Game</h1>

            <p> Palabra anterior: {lastWord || "-"} </p>
            <p> Puntaje: {score} </p>
            <p> Tiempo: {timeLeft || "-"} </p>

            {gameOver ? (
                <div>
                    <p> PARTIDA TERMINADA </p>
                    <p> Cantidad de palabras: {wordChain.length} </p>
                    <button className="btn-primary" onClick={handleResetGame}> Nuevo intento</button>
                </div>
            ) : (
                <>
                    <input
                        className="word-input"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="escribí una palabra"
                    />
                    <button className="btn-submit" onClick={handleSubmitWord}> Enviar</button>
                    {msg && <p>{msg}</p>}
                </>
            )}

            <p> Cadena: {wordChain.join(" -> ")} </p>
        </PageCardLayout>
    );
}

export default Game;