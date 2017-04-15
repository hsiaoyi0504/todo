import React, { Component } from 'react';
import './TodoApp.css';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [
        {
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
      ],
    };
  }

  onFinishedChanged = (indexList, indexItem) => {
    const { name, numTodo, numFinished, numNotFinished, todos } = this.state.todoLists[indexList];
    const { isFinished } = todos[indexItem];
    const nameItem = todos[indexItem].name;
    this.setState({
      todoLists: this.state.todoLists.slice(0, indexList)
      .concat({
        name,
        numTodo,
        numFinished: isFinished ? numFinished - 1 : numFinished + 1,
        numNotFinished: isFinished ? numNotFinished + 1 : numNotFinished - 1,
        todos: todos.slice(0, indexItem)
        .concat({
          name: nameItem,
          isFinished: !isFinished,
        })
        .concat(todos.slice(indexItem + 1)),
      })
      .concat(this.state.todoLists.slice(indexList + 1)),
    });
  }

  addList = () => {
    this.setState({
      todoLists: this.state.todoLists
      .concat(
        {
          name: 'Untitled TodoList',
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
      ),
    });
  }

  deleteList = (index) => {
    this.setState({
      todoLists: this.state.todoLists.slice(0, index)
      .concat(this.state.todoLists.slice(index + 1)),
    });
  }

  editListName = (event, index) => {
    const { numTodo, numFinished, numNotFinished, todos } = this.state.todoLists[index];
    this.setState({
      todoLists: this.state.todoLists.slice(0, index)
      .concat({
        name: event.target.value,
        numTodo,
        numFinished,
        numNotFinished,
        todos,
      })
      .concat(this.state.todoLists.slice(index + 1)),
    });
  }

  addItem = (indexList) => {
    const { name, numTodo, numFinished, numNotFinished, todos } = this.state.todoLists[indexList];
    this.setState({
      todoLists: this.state.todoLists.slice(0, indexList)
      .concat({
        name,
        numTodo: numTodo + 1,
        numFinished,
        numNotFinished: numNotFinished + 1,
        todos: todos.concat([
          {
            name: 'Untitled TodoItem',
            isFinished: false,
          },
        ]),
      })
      .concat(this.state.todoLists.slice(indexList + 1)),
    });
  }

  deleteItem = (indexList, indexItem) => {
    const { name, numTodo, numFinished, numNotFinished, todos } = this.state.todoLists[indexList];
    const { isFinished } = todos[indexItem];
    this.setState({
      todoLists: this.state.todoLists.slice(0, indexList)
      .concat({
        name,
        numTodo: numTodo - 1,
        numFinished: isFinished ? numFinished - 1 : numFinished,
        numNotFinished: isFinished ? numNotFinished : numNotFinished - 1,
        todos: todos.slice(0, indexItem).concat(todos.slice(indexItem + 1)),
      })
      .concat(this.state.todoLists.slice(indexList + 1)),
    });
  }

  editItem = (event, indexList, indexItem) => {
    const { name, numTodo, numFinished, numNotFinished, todos } = this.state.todoLists[indexList];
    const { isFinished } = todos[indexItem];
    this.setState({
      todoLists: this.state.todoLists.slice(0, indexList)
      .concat({
        name,
        numTodo,
        numFinished,
        numNotFinished,
        todos: todos.slice(0, indexItem)
        .concat({
          name: event.target.value,
          isFinished,
        })
        .concat(todos.slice(indexItem + 1)),
      })
      .concat(this.state.todoLists.slice(indexList + 1)),
    });
  }

  render() {
    const todoLists = this.state.todoLists;
    return (
      <div className="TodoApp">
        <div className="App-header">
          <h2>Todos</h2>
          <button onClick={this.addList}>Add TodoList</button>
        </div>
        {
          todoLists.map((todoList, index) =>
            <TodoList
              todoList={todoList}
              key={index}
              editListName={event => this.editListName(event, index)}
              deleteList={() => this.deleteList(index)}
              addItem={() => this.addItem(index)}
              deleteItem={indexItem => this.deleteItem(index, indexItem)}
              editItem={(event, indexItem) => this.editItem(event, index, indexItem)}
              onFinishedChanged={indexItem => this.onFinishedChanged(index, indexItem)}
            />,
          )
        }
      </div>
    );
  }
}

export default TodoApp;
