import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



const Card = (props) => {
    const [location, setLocation] = useState(useLocation());
    const isSearch = location.pathname === "/search";

    const handleClick = (e) => {
        e.preventDefault();
        props.save(e.target.id);
        document.getElementById(e.target.id).disabled = true;
    }

    return (
        <div style={isSearch ? {width: '18rem'} : {width: '31rem'}} className="card m-3 shadow">
            <img src={props.img} 
                alt={props.name} 
                className="card-img-top" 
                style={isSearch ? {height: '15rem', objectFit: 'cover'} : {height: '25rem', objectFit: 'cover'}}/>
            <div className="card-body text-center">
                <h4 className="card-title">{props.name}</h4>
                    <p>Breed: {props.breed}</p>
                    <p>Age: {props.age}</p>
                    <p>Zip Code: {props.zip}</p>
            </div>
            <div className="text-center">
            {isSearch ? <button 
                id={props.id}
                onClick={handleClick}
                className="btn mb-3"
                >add to favorites</button> : <></>}
            </div>
        </div>
    )
}

export default Card