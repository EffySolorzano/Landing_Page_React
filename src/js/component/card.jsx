import React from "react";

const Card = (props) => {
    return(
<>      
         <div className="card m-2">
          <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.buttonURL} target="_blank" className="btn btn-warning">
              {props.buttonLabel}
            </a>
          </div>
        </div>
        
    </>
    );
};

export default Card;