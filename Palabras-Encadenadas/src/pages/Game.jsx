import { useState } from "react";
import { validateWord } from "../services/apiWord";

function Game() {
    const [word, setWord] = useState("");
    const [wordChain, setWordChain] = useState([]);
    const [msg, setMsg] = useState(null);

    const handleSubmit = async () => {
        const trimmedWord = word.trim().toLocaleUpperCase();

        if (trimmedWord === "") return;

        try {
            const exists = await validateWord(trimmedWord);

            if (!exists) {
                setMsg("Palabra inexistente");
                return;
            }

            if (wordChain.length > 0) {     // 0 = []
                const lastWord = wordChain[wordChain.length - 1];    //ultima palabra de la cadena
                const lastLetter = lastWord[lastWord.length - 1];    //ultima letra de la ultima palabra
                const firstLetter = trimmedWord[0];           //primera letra de la nueva palabra

                if (firstLetter !== lastLetter) {
                    setMsg(`Debe empezar con "${lastLetter}` );
                    return
                }
            }

            setWordChain([...wordChain, trimmedWord])       //agrego a la cadena la nueva palabra
            setMsg(null);       //restablezco estado
            setWord("");        //restablezco estado

        } catch (error) {
            setResult( "Error: " + error.message);
            console.error(error);
        }
    };

    return (
        <div style={{ backgroundColor: "lightgreen", minHeight: "100vh" }}>
            <h1>Game</h1>
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