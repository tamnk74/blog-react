import React from 'react';
import { CoffeeAnimation } from '../../components';

const CssSample = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8"></div>
        <div className="col-sm-2">
          <CoffeeAnimation />
        </div>
      </div>
    </div>
  );
};

export { CssSample };
