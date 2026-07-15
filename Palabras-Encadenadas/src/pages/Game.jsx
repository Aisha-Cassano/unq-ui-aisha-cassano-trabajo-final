import { useState, useEffect } from "react";
import { useWordChain } from "../components/useWordChain.js";
import { useGame } from "../components/useGame.js";
import { useLeaderboard } from "../components/useLeaderboard.js";
import { FaCheck } from "react-icons/fa6";

import PageCardLayout from "../layouts/PageCardLayout.jsx";
import "../styles/pages/Game.css";
import "../styles/components/Buttons.css";

function Game() {
    const [word, setWord] = useState("");
    const [playerName, setPlayerName] = useState("");
    const {
        wordChain,
        msg,
        score,
        lastWord,
        timeLeft,
        gameOver,
        submitWord,
        resetGame } = useGame();

    const { addEntry } = useLeaderboard();

    const handleSubmitWord = async () => {
        await submitWord(word);
        setWord("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            handleSubmitWord();
        }
    }

    const handleResetGame = () => {
        const playerFinalName = playerName.trim() === "" ? "Anónimo" : playerName.trim();

        addEntry(playerFinalName, score);

        resetGame();
        setWord("");
        setPlayerName("");
    };

    // Hace que scrollee solo para abajo la cadena
    // de palabras, para ver siempre las mas recientes
    useEffect( () => {
        const chainSection = document.getElementById("chain-section-scroll");
        if (chainSection) {
            chainSection.scrollTop = chainSection.scrollHeight;
        }
    }, [wordChain] );


    return (
        <PageCardLayout cardClassName="game-card" >
            <div className="game-content">

                    <div className="stats">
                        <div className="stats-items"> Puntaje {score} </div>
                        <div className="stats-items"> Tiempo {timeLeft || "-"} </div>
                    </div>

                    <div className="last-word-section">
                        <div className="big-label"> Ultima palabra:</div>
                        <div className="last-word-value"> {lastWord || "-"} </div>
                    </div>

                {gameOver ? (
                    <div>
                        <div>
                            <p> PARTIDA TERMINADA </p>
                            <p> Palabras en total: {wordChain.length} </p>
                        </div>
                        <input
                            className="word-input"
                            value={playerName}
                            onChange={ (e) => setPlayerName(e.target.value) }
                            placeholder="Ingresa tu nombre (opcional)"
                        />

                        <button className="btn-primary" onClick={handleResetGame}> Nuevo intento </button>
                    </div>
                ) : (
                    <div>
                        <div className="alert-msg">
                            <p> {msg} </p>
                        </div>

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
                    </div>
                )}
                <div>
                    <div className="big-label"> Cadena Actual </div>
                    <div id="chain-section-scroll" className="chain-section">
                        {wordChain.join("  ->  ")}
                    </div>
                </div>
            </div>
        </PageCardLayout>
    );
}

export default Game;