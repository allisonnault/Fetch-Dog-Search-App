import React, { useEffect, useState } from 'react';
import axios from 'axios';


const apiURL = "https://frontend-take-home-service.fetch.com";

const Breeds = () => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetchBreeds();
    }, [])

    const fetchBreeds = async (e) => {
        const api = axios.create({
            withCredentials: true
        });
        const response = await api.get(apiURL+"/dogs/breeds", {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await response.data;
        setBreeds(data);
    }



    return (
        <div className='dropdown'>
          <ul>
            {breeds.map((breed, index) => (
                <li key={index}>{breed}</li>
            ))}
          </ul>
        </div>
    )
}

export default Breeds