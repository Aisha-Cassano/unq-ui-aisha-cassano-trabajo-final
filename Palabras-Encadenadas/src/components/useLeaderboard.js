import { useState, useEffect } from "react";

const STORAGE_KEY = "leaderboard";
const MAX_ENTRIES = 10;

export function useLeaderboard(){
    const [entries, setEntries] = useState([])

    useEffect( () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {       // Si da truthy, quiero si contenido
            setEntries(JSON.parse(stored));
        }
    }, []);

    const addEntry = (name, score) => {
        setEntries( (prevEntries) => {
            const insertIndex = prevEntries.findIndex( (entry) => entry.score <= score );
            const newEntries = [...prevEntries];

            if(insertIndex === -1) {
                newEntries.push({ name, score });
            } else {
                newEntries.splice(insertIndex, 0, { name, score });
            }
            const trimmedEntries = newEntries.slice(0, MAX_ENTRIES);

            localStorage.setItem( STORAGE_KEY, JSON.stringify(trimmedEntries) );
            return trimmedEntries;
        })
    }
    return { entries, addEntry };
}