import axios from "axios";


const BASE_URL = 'https://yt-api.p.rapidapi.com'

const options = {
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const data = await axios.get(`${BASE_URL}/${url}`, options)

    return data.data
}


