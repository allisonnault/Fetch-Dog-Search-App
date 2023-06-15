import React from "react";

const Card = (props) => {
    return (
        <div className="card m-3 w-25">
            <img src={props.img} className="card-img-top"/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                    <p>Breed: {props.breed}</p>
                    <p>Age: {props.age}</p>
                    <p>Zip Code: {props.zip}</p>
            </div>

        </div>
    )
}

export default Card