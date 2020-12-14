import React from 'react';
import './styles/SmallInfoCard.scss';

const SmallInfoCard = ({ title, subtitle }) => {
  return (
    <div className="smallInfoCard">
      <p className="smallInfoCard__title">{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default SmallInfoCard;
