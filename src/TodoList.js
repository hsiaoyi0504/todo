import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import CountDisplay from './CountDisplay';
import './TodoList.css';
import add from './add.svg';
import deleteList from './deleteList.svg';

class TodoList extends Component {
  render() {
    const todoList = this.props.todoList;
    return (
      <div className="TodoList">
        <input value={todoList.name} onChange={this.props.editListName} />
        {todoList.todos.map((todo, index) =>
          <TodoItem
            task={todo.name}
            key={index}
            isFinished={todo.isFinished}
            onFinishedChanged={() => this.props.onFinishedChanged(index)}
            deleteItem={() => this.props.deleteItem(index)}
            editItem={event => this.props.editItem(event, index)}
          />,
          )}
        <img src={deleteList} onClick={this.props.deleteList} alt="deleteList" />
        <CountDisplay
          numTodo={todoList.numTodo}
          numFinished={todoList.numFinished}
          numNotFinished={todoList.numNotFinished}
        />
        <img src={add} alt="add" className="AddItem" onClick={this.props.addItem} />
        <div className="clear" />
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  editListName: PropTypes.func,
  onFinishedChanged: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
  deleteList: PropTypes.func,
  addItem: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [{}],
  editListName: this.props.editListName,
  onFinishedChanged: this.props.onFinishedChanged,
  deleteItem: this.props.deleteItem,
  editItem: this.props.editItem,
  deleteList: this.props.deleteList,
  addItem: this.props.addItem,
};

export default TodoList;
