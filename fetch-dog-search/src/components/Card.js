import React from "react";

const Card = (props) => {


    return (
        <div className="card dogCard m-3 shadow">
            <img src={props.img} alt={props.name} className="card-img-top"/>
            <div className="card-body text-center">
                <h4 className="card-title">{props.name}</h4>
                    <p>Breed: {props.breed}</p>
                    <p>Age: {props.age}</p>
                    <p>Zip Code: {props.zip}</p>
            </div>
            <div className="text-center">
            <button 
                id={props.id}
                onClick={(e) => props.save(e.target.id)}
                className="btn btn-primary mb-3"
                >add to favorites</button>
            </div>
        </div>
    )
}

export default Card