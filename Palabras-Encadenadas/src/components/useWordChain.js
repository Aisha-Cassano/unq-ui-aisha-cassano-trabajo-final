import { useState } from "react";
import { validateWord } from "../services/apiWord.js";

export function useWordChain() {
    const [wordChain, setWordChain] = useState([]);
    const [msg, setMsg] = useState(null);
    const [score, setScore] = useState(0);

    const lastWord = wordChain.length > 0 ? wordChain[wordChain.length - 1] : null;  //ultima palabra o null
    const lastLetter = lastWord ? lastWord[lastWord.length - 1] : null;              //ultima letra o null


    const addWord = async (word) => {
        const trimmedWord = word.trim().toLocaleUpperCase();

        if(trimmedWord === "") return { added: false };

        try {
            const exist = await validateWord(trimmedWord);
            const isReapeted= wordChain.includes(trimmedWord);
            const isChainedCorrectly = word[0] === lastLetter;  //primer letra de la nueva === ultima letra de la anterior?

            if (!exist) {       //switch
                setMsg("Palabra inexistente");
                return { added: exist };
            }

            if (isReapeted) {
                setMsg("La palabra ya fue utilizada");
                return { added: !isReapeted };
            }

            if (!isChainedCorrectly) {
                setMsg(`Debe empezar con ${lastLetter}`);
                return { added: isChainedCorrectly };
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