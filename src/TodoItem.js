import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import deleteIcon from './delete.svg';
import check from './check.svg';
import notCheck from './notCheck.svg';

class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        {this.props.isFinished ? (
          <img
            src={check}
            alt="checked"
            className="img-left check"
            onClick={this.props.onFinishedChanged}
          />
          ) : (
            <img
              src={notCheck}
              alt="not-checked"
              className="img-left check"
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
  isFinished: false,
  onFinishedChanged: this.props.onFinishedChanged,
  editItem: this.props.editItem,
  deleteItem: this.props.deleteItem,
};

export default TodoItem;
