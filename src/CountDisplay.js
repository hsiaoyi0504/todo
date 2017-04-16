import React, { Component } from 'react';
import PropTypes from 'prop-types';
import checked from './img/check_box.svg';
import notChecked from './img/check_box_outline_blank.svg';
import './css/CountDisplay.css';

class CountDisplay extends Component {
  render() {
    return (
      <div className="CountDisplay">
        <span>
          <img className="count-todo" src={checked} alt="checked" />
          {this.props.numFinished}
        </span>
        <span>
          <img className="count-todo" src={notChecked} alt="notChecked" />
          {this.props.numNotFinished}
        </span>
        <p>Total: {this.props.numTodo}</p>
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
