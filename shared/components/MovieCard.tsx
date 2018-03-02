import React from "react";

const MovieCard = props => (
    <div>
        <span>
            <h1>{props.title}</h1>
            <h2>{props.director}</h2>
        </span>
        <p>{props.description}</p>
    </div>
);

export default MovieCard;
