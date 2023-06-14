import React from 'react';
import axios from 'axios';

const apiURL = "https://frontend-take-home-service.fetch.com";

const Breeds = () => {

    const findBreeds = async (e) => {
        e.preventDefault();

        const api = axios.create({
            withCredentials: true
        });
        const response = await api.get(apiURL+"/dogs/breeds", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        });
       console.log(response);
    }

    return (
        <div>
           

            <button onClick={findBreeds} className='btn btn-primary'>Get Breeds</button>
          
        </div>
    )
}

export default Breeds