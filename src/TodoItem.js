import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/TodoItem.css';
import deleteIcon from './img/delete.svg';
import check from './img/check.svg';
import notCheck from './img/notCheck.svg';

class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        {this.props.isFinished ? (
          <img
            src={check}
            alt="checked"
            className="check"
            onClick={this.props.onFinishedChanged}
          />
          ) : (
            <img
              src={notCheck}
              alt="not-checked"
              className="check"
              onClick={this.props.onFinishedChanged}
            />
          )}
        <input value={this.props.task} onChange={this.props.editItem} />
        <img
          src={deleteIcon}
          alt="delete"
          className="img-right half-transparent"
          onClick={this.props.deleteItem}
        />
      </div>
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.string,
  isFinished: PropTypes.bool,
  onFinishedChanged: PropTypes.func,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

TodoItem.defaultProps = {
  task: 'None',
  isFinished: null,
  onFinishedChanged: null,
  editItem: null,
  deleteItem: null,
};

export default TodoItem;
