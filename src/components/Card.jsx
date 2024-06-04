import React from 'react';
import '../styles/Card.sass';

const Card = ({ content }) => {
  return (
    <div className='card-container'>
      {content}
    </div>
  );
};

export default Card;