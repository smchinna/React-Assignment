import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CategoryLayout } from './styles';

import SlideCategory from '../SlideCategory';

class CategoryComponent extends Component {

  render() {
    const { category } = this.props;

    return (
      <div>
        <CategoryLayout>
          <div className="categoryName">
            { category.name }
          </div>
          <SlideCategory categoryData={category}/>
        </CategoryLayout>
      </div>
    );
  }
}

CategoryComponent.propTypes = {
  category: PropTypes.object
}

export default CategoryComponent;

