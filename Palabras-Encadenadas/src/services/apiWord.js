import axios from "axios";

const API = "https://word-api-hmlg.vercel.app";

export const validateWord = async (word) => {
    const response = await axios.get(
        `${API}/api/validate`, {params: { word }}
    );
    return response.data.exists;
};