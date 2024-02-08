import axios from "axios";

export default axios.create({
    baseURL: "http://16a2-103-59-191-158.ngrok-free.app",
    headers: {
        "ngrok-skip-browser-warning": true
    }
})