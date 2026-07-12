import { useState } from "react";
import { validateWord } from "../services/apiWord.js";

export function useWordChain() {
    const [wordChain, setWordChain] = useState([]);
    const [msg, setMsg] = useState(null);
    const [score, setScore] = useState(0);

    const lastWord = wordChain.length > 0 ? wordChain[wordChain.length - 1] : null;  //ultima palabra o null
    const lastLetter = lastWord ? lastWord[lastWord.length - 1] : null;              //ultima letra o null


    const isReapeted = (word) => wordChain.includes(word);

    const isChainedCorrectly = (word) => {
        if (!lastWord) return true;         //caso base: truthy(!null) => true

        return word[0] === lastLetter;      //es la primer letra de la nueva, igual a la ultima letra de la anterior?
    };

    const addWord = async (word) => {
        const trimmedWord = word.trim().toLocaleUpperCase();

        if(trimmedWord === "") return { added: false };

        try {
            const exist = await validateWord(trimmedWord);

            if (!exist) {
                setMsg("Palabra inexistente");
                return { added: false };
            }

            if (isReapeted(trimmedWord)) {
                setMsg("La palabra ya fue utilizada");
                return { added: false };
            }

            if (!isChainedCorrectly(trimmedWord)) {
                setMsg(`Debe empezar con ${lastLetter}`);
                return { added: false };
            }

            setWordChain([...wordChain, trimmedWord])     //agrego a la cadena la nueva palabra
            setScore(score + trimmedWord.length)          //sumo los puntos de la nueva palabra
            setMsg(null);                                 //restablezco estado
            return { added: true};

        } catch (error) {
            setMsg("Error: " + error.message);
            console.error(error);
            return { added: false };
        }
    };

    const resetChain = () => {
        // restablezco estados
        setWordChain([]);
        setMsg(null);
        setScore(0);
    };

    return { wordChain, msg, score, lastWord, lastLetter, addWord, resetChain };
}