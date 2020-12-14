import React from 'react';
import './styles/HelpCard.scss';

const HelpCard = ({ content }) => {
  return (
    <div className="helpCard">
      <p>{content}</p>
    </div>
  );
};

export default HelpCard;
