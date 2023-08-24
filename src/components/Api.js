import axios from "axios";

export default function Api(){

    const http = axios.create({
        baseURL: 'http://localhost:8000/api/',
        headers: {
            'content-type' : 'application/json'
        }
    });
    return{
        http
    }
}