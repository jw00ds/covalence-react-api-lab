import React from "react";
// import "isomorphic-fetch";
// import "es6-promise";

const FilmCards = (props) => {
    return (
        <li className="list-group-item py-3 d-flex justify-content-between align-items-center">
            <span className="font-weight-bold col-3 p-2">{props.filmsArray.title}</span>
            <span className="p-2">{props.filmsArray.description}</span>
        </li>
    );
}

export default FilmCards;