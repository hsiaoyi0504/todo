import React, { Component } from 'react';
import PropTypes from 'prop-types';
import checked from './check_box.svg';
import notChecked from './check_box_outline_blank.svg';
import './CountDisplay.css';

class CountDisplay extends Component {
  render() {
    return (
      <div className="CountDisplay">
        <img src={checked} alt="checked" />
        <span> {this.props.numFinished}</span>
        <br />
        <img src={notChecked} alt="notChecked" />
        <span> {this.props.numNotFinished}</span>
        <h5>Total: {this.props.numTodo}</h5>
      </div>
    );
  }
}

CountDisplay.propTypes = {
  numFinished: PropTypes.number,
  numNotFinished: PropTypes.number,
  numTodo: PropTypes.number,
};

CountDisplay.defaultProps = {
  numFinished: 0,
  numNotFinished: 0,
  numTodo: 0,
};

export default CountDisplay;
