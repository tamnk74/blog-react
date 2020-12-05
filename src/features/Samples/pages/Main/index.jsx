import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Link to="/samples/google-calendar" className="nav-link">
      <i
        className="fa fa-calendar"
        style={{ color: 'blue', marginRight: '10px' }}
      ></i>{' '}
      Google Calendar
    </Link>
  );
};
export { MainPage };
