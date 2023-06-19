import React, { useEffect} from 'react';
import axios from 'axios';

const apiURL = "https://frontend-take-home-service.fetch.com";

const api = axios.create({
    withCredentials: true
});

const Logout = () => {
  
    useEffect(() => {
        logout();
    })


    const logout = async (e) => {
        const response = await api.post(apiURL+"/auth/logout", {
            withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
        });
        window.location.assign("/Fetch-Dog-Search-App/");
    }
};

export default Logout;