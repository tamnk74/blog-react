import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import CategoryList from '../../components/categories/CategoryList'
import { categoryActions } from './actions'
import wrapLayout from '../../components/layouts/default';

class CategoryPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(categoryActions.getCategories());
  }

  render() {
    const { categories } = this.props;
    return (
      <Fragment>
        {categories &&
          <CategoryList categories={categories} />
        }
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  categories: state.categories.items
})

const connectedCategoryPage = wrapLayout(connect(mapStateToProps)(CategoryPage));
export { connectedCategoryPage as CategoryPage }; 