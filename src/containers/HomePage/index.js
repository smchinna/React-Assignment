import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchmockData } from '../../redux/actions';

import CategoryComponent from '../../components/CategoryComponent';
import Waiting from '../../components/Waiting';

class Homepage extends Component {
 
  /** To Fetch the mock data from Redux Store */
  componentDidMount() {
    const { fetchmockData, mocklist } = this.props;
    if(!mocklist) {
      fetchmockData();
    }
  }

  render() {
    const { mocklist } = this.props;

    if(!mocklist) {
      return <Waiting />
    }

    return (
      <div>
        { mocklist.categories.map((category, index) => (
          <CategoryComponent category={category} key={index}/>
        ))}
      </div>
    )
  }
}

Homepage.propTypes = {
  fetchmockData: PropTypes.func.isRequired,
  mocklist: PropTypes.object
}

const mapStateToProps = (state) => ({
  mocklist: state.mockReducer.mockList
});

const mapDispatchToProps = (dispatch) => ({
  fetchmockData: () => dispatch(fetchmockData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);