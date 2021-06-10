import axios from "axios";

// Makes axios call to rails backend to fetch user
export const getRandomDog = () => {
    debugger
    // Retrieves CSRF token for authenticated call
    if (document != null && document.querySelector('[name=csrf-token]') != null && 
        document.querySelector('[name=csrf-token]').content != null) {
        const token = document.querySelector('[name=csrf-token]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    }

    const url = 'http://localhost:8082/api/data/getRandomDog';
    return axios.post(url);
}