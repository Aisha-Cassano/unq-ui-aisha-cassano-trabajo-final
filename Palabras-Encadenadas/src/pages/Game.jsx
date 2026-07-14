import { useState } from "react";
import { useWordChain } from "../components/useWordChain.js";
import { useGame } from "../components/useGame.js";
import { FaCheck } from "react-icons/fa6";

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
            <div className="game-content">

                    <div className="stats">
                        <div className="stats-items"> Puntaje: {score} </div>
                        <div className="stats-items"> Tiempo: {timeLeft || "-"} </div>
                    </div>

                    <div className="last-word-section">
                        <div className="last-word-label"> Ultima palabra:</div>
                        <div className="last-word-value"> {lastWord || "-"} </div>
                    </div>


                {gameOver ? (
                    <div>
                        <p> PARTIDA TERMINADA </p>
                        <p> Cantidad de palabras: {wordChain.length} </p>
                        <button className="btn-primary" onClick={handleResetGame}> Nuevo intento</button>
                    </div>
                ) : (
                    <div>
                        <div className="input-row">
                            <input
                                className="word-input"
                                value={word}
                                onChange={(e) => setWord(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Escribí una palabra"
                            />
                            <button className="btn-submit" onClick={handleSubmitWord}>
                                <FaCheck/>
                            </button>

                        </div>
                        <div className="alert-msg"> {msg} </div>
                    </div>
                )}

                <p> Cadena: {wordChain.join(" -> ")} </p>

            </div>
        </PageCardLayout>
    );
}

export default Game;