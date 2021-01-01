import React, { useEffect } from 'react';
import { SnowflakeJs } from '../../components/SnowFlake/SnowFall';
import './styles.scss';

const SnowFlake = () => {
  const snowflake = new SnowflakeJs(25, 50, 5000, 4, 15);
  snowflake.init();
  useEffect(() => {}, []);
  return <div className="container-fluid snow-ground"></div>;
};

export { SnowFlake };
