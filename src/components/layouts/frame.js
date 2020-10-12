import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This function takes a component...
class Frame extends Component {
  render() {
    const { slot: Slot } = this.props;
    return (
      <div className="col-md-8 offset-md-2">
        <Slot {...this.props} />
      </div>
    );
  }
}

Frame.propTypes = {
  slot: PropTypes.any,
};

export default Frame;
