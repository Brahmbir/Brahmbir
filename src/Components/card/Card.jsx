import React from "react";
import "./Card.css"

const Card = ({ detail }) => {
    return (<>
        <div className="details">
            <h3>{detail.heading}</h3>
            <p>{detail.paragraph}</p>
            {detail.readMoreLink == "" ? "" : < a href={detail.readMoreLink}>Live Link <span>→</span></a>}
        </div >
        <div className="img">
            <img
                src={detail.imgLink} />
        </div>
    </>);
}

export default Card;
