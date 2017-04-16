import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import CountDisplay from './CountDisplay';
import './css/TodoList.css';
import add from './img/add.svg';
import deleteList from './img/deleteList.svg';

class TodoList extends Component {
  render() {
    const todoList = this.props.todoList;
    return (
      <div className="TodoList">
        <div>
          <input className="TodoListTitle" value={todoList.name} onChange={this.props.editListName} />
          <img id="deleteListBtn" src={deleteList} onClick={this.props.deleteList} alt="deleteList" />
        </div>
        <div className="items">
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
        </div>
        <img src={add} alt="add" className="AddItem" onClick={this.props.addItem} />
        <div className="clear" />
        <CountDisplay
          numTodo={todoList.numTodo}
          numFinished={todoList.numFinished}
          numNotFinished={todoList.numNotFinished}
        />
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.object,
  editListName: PropTypes.func,
  onFinishedChanged: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
  deleteList: PropTypes.func,
  addItem: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: {
    name: 'TodoList 1',
    numTodo: 1,
    numFinished: 0,
    numNotFinished: 1,
    todos: [
      {
        name: 'Untitled TodoItem',
        isFinished: false,
      },
    ],
  },
  editListName: null,
  onFinishedChanged: null,
  deleteItem: null,
  editItem: null,
  deleteList: null,
  addItem: null,
};

export default TodoList;
