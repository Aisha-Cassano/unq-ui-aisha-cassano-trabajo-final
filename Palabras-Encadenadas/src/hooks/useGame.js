import { useState } from "react";
import { useWordChain } from "./useWordChain.js";
import { useTimer} from "./useTimer.js";

const SECONDS = 15;

export function useGame() {
    const [gameOver, setGameOver] = useState(false);

    const {
        wordChain,
        msg,
        score,
        lastWord,
        lastLetter,
        addWord,
        resetChain } = useWordChain();

    const {
        timeLeft,
        start,
        reset } = useTimer(SECONDS, () => setGameOver(true))

    const submitWord = async (word) => {
        if (gameOver) return;

        const result = await addWord(word);
        if (result.added){
            start();
        }
    }

    const resetGame = () => {
        resetChain();               //reset cadena
        reset();                    //reset reloj
        setGameOver(false);   //reset estado
    }

    return {
        wordChain,
        msg,
        score,
        lastWord,
        lastLetter,
        timeLeft,
        gameOver,
        submitWord,
        resetGame
    };
}