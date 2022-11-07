import React from 'react';

function HobbyCard(props) {
  return (
    <div className="hobbies-cards">
      <img src={ props.image } alt={ props.hobby }></img>
      <h4>{ props.hobby }</h4>
    </div>
  );
}

export default HobbyCard;
