import React from "react";

const Card = ({ title = "Card title", url = "htttps://www.google.com", alt = "...", text = "Some quick example text to build on the card title and make up the bulk of the card's content.", btnText = "Go somewhere" }) => (
    <div className="card" style={{ width: "18rem" }}>
        <img
            src={url}
            className="card-img-top"
            alt="..."
        />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {text}
            </p>
            <a href="#.com" className="btn btn-success">{btnText}</a>
        </div>
    </div>

)

export default Card