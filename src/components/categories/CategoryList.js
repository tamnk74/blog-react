import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  const cardStyle = {
    width: '18rem',
  };
  const cardListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const categoryCards = categories.map((category, i) => (
    <div key={i} className="p-2">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">
            <Link
              to={`/categories/${category.title}/posts`}
              className="nav-link"
            >
              {category.title}
            </Link>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted"></h6>
          <p className="card-text">{category.description}</p>
        </div>
      </div>
    </div>
  ));

  return <div style={cardListStyle}>{categoryCards}</div>;
};

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;
