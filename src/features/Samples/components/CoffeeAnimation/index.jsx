import React from 'react';
import './styles.scss';

const CoffeeAnimation = () => {
  return (
    <div className="container coffee-el">
      <div className="row beans"></div>
      <div className="row grinder"></div>
      <div className="row grinder_bottom"></div>
      <div className="row v60"></div>
      <div className="row drip"></div>
      <div className="row cup"></div>
    </div>
  );
};

export { CoffeeAnimation };
