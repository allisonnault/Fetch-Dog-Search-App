import React, { useEffect, useState } from 'react';
import axios from 'axios';


const apiURL = "https://frontend-take-home-service.fetch.com";

const Search = () => {
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
      <div>
        <div className='input-group mb-3'>
            <label className='input-group-text' for='inputGroupSelect01'>Breeds</label>
            <select className='form-select' id='inputGroupSelect01'>
                <option selected>Choose...</option>
                {breeds.map((breed, i) => (
                    <option key={i}>{breed}</option>
                ))}
            </select>
        </div>
      </div>
    )
}

export default Search