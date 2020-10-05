import React from "react";
// import "isomorphic-fetch";
// import "es6-promise";

const PersonCards = (props) => {
    // If I wanted to display "howboudah" on each unique ID page when it opened, would that even be possible via splicing in a new property to each person array w/ that as a value, or since it takes you to a new link, is that not possible?
    return (
        <li className="list-group-item py-3 d-flex justify-content-between align-items-center">
            <span className="font-weight-bold col-2 p-2">{props.peopleArray.name}</span>
            <span className="col-2 p-2">{props.peopleArray.age}</span>
            <span className="col-2 p-2">{props.peopleArray.gender}</span>
            <a href={props.peopleArray.url} target="_blank" className="btn btn-success">₵4$h me ouside</a>
        </li>
    );
}

export default PersonCards;