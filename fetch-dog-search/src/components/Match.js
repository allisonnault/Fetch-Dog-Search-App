import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "./Card";

const apiURL = "https://frontend-take-home-service.fetch.com";
const api = axios.create({
  withCredentials: true,
});

const Match = () => {

    const {id} = useParams();
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        fetchDog();
    }, []);

    const fetchDog = async (e) => {
        const body = [id];
        const response = await api.post(apiURL+'/dogs', body, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await response.data;
        setResult(data);
   }

   return (
    <div>
    <div className="container justify-content-center">
        <h3>Your Match:</h3>
        {result.length ? <Card
            age={result[0].age} 
            breed={result[0].breed} 
            id={result[0].id}
            img={result[0].img}
            name={result[0].name}
            zip={result[0].zip_code} /> : 
            <div>No Match</div>}
       </div>
    </div>
   )


}

export default Match