import axios from "axios";

const instance = axios.create({
    baseURL:
         "https://internshala-backend-5ngd.onrender.com/",
    withCredentials: true,
});

export default instance;