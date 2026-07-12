import { useState, useEffect } from "react";

export function useTimer(seconds, onTimeout) {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect( () => {
        if (timeLeft === null) return;      //Si el timer no empezo => no hago nada

        if (timeLeft === 0) {       //Si el timer llego a 0 => timeout
            onTimeout();
            return;
        }

        const interval = setInterval( () => {   //contador-1 x cada segundo
            setTimeLeft((prev) => prev - 1)
        }, 1000);       // 1000 milisegundos = 1 segundo

        return () => clearInterval(interval);   //limpieza: cancelo el intervalo
    }, [timeLeft]);

    const start = () => setTimeLeft(seconds);
    const reset = () => setTimeLeft(null);

    return { timeLeft, start, reset }
}