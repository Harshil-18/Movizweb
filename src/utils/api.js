import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmE3ZGU1ZWM3MjUwNzM5MDRkZWZiZjM3Y2U4ZGVmMyIsInN1YiI6IjY0NGZjY2M3MzUwMzk4MDJkZGQ1YTY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2QcleWq8L0Xe7AptJqzLVtBD58d0bp-nv01SwtbHUB0"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url,params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } 
    catch(err) {
        console.log(err);
        return err;
    }
};