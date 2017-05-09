import React, { Component } from 'react';
import PropTypes from 'prop-types';
import check from './img/check.svg';
import notCheck from './img/notCheck.svg';
import './css/TodoSummary.css';

class TodoSummary extends Component {
  render() {
    return (<div>
      <p>You have {this.props.total} todos in total.<br />
        You have finished <img src={check} alt="finished" /> {this.props.numFinished} of them.
        You still have to finish <img src={notCheck} alt="not-finished" /> {this.props.numNotFinished} todos.</p>
    </div>);
  }
}

TodoSummary.propTypes = {
  total: PropTypes.number,
  numFinished: PropTypes.number,
  numNotFinished: PropTypes.number,
};

TodoSummary.defaultProps = {
  total: 5,
  numFinished: 0,
  numNotFinished: 3,
};

export default TodoSummary;
