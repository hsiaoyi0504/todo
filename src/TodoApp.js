import React, { Component } from 'react';
import './css/TodoApp.css';
import TodoList from './TodoList';
import TodoSummary from './TodoSummary';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 9,
      totalFinished: 3,
      totalNotFinished: 6,
      todoLists: [
        {
          name: 'TodoList 1',
          numTodo: 2,
          numFinished: 1,
          numNotFinished: 1,
          todos: [
            {
              name: 'TodoItem 1',
              isFinished: false,
            },
            {
              name: 'TodoItem 2',
              isFinished: true,
            },
          ],
        },
        {
          name: 'TodoList 2',
          numTodo: 1,
          numFinished: 0,
          numNotFinished: 1,
          todos: [
            {
              name: 'TodoItem 3',
              isFinished: false,
            },
          ],
        },
        {
          name: 'TodoList 3',
          numTodo: 3,
          numFinished: 0,
          numNotFinished: 3,
          todos: [
            {
              name: 'TodoItem 4',
              isFinished: false,
            },
            {
              name: 'TodoItem 5',
              isFinished: false,
            },
            {
              name: 'TodoItem 6',
              isFinished: false,
            },
          ],
        },
        {
          name: 'TodoList 4',
          numTodo: 2,
          numFinished: 1,
          numNotFinished: 1,
          todos: [
            {
              name: 'TodoItem 7',
              isFinished: true,
            },
            {
              name: 'TodoItem 8',
              isFinished: false,
            },
          ],
        },
        {
          name: 'TodoList 5',
          numTodo: 1,
          numFinished: 1,
          numNotFinished: 0,
          todos: [
            {
              name: 'TodoItem 9',
              isFinished: true,
            },
          ],
        },
      ],
    };
  }

  onFinishedChanged = (indexList, indexItem) => {
    const { totalFinished, totalNotFinished, todoLists } = this.state;
    const { name, numTodo, numFinished, numNotFinished, todos } = todoLists[indexList];
    const { isFinished } = todos[indexItem];
    const nameItem = todos[indexItem].name;
    this.setState({
      totalFinished: isFinished ? totalFinished - 1 : totalFinished + 1,
      totalNotFinished: isFinished ? totalNotFinished + 1 : totalNotFinished - 1,
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
    const { total, totalNotFinished, todoLists } = this.state;
    this.setState({
      total: total + 1,
      totalNotFinished: totalNotFinished + 1,
      todoLists: todoLists
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
    const { todoLists, total, totalFinished, totalNotFinished } = this.state;
    const { numTodo, numFinished, numNotFinished } = todoLists[index];
    this.setState({
      total: total - numTodo,
      totalFinished: totalFinished - numFinished,
      totalNotFinished: totalNotFinished - numNotFinished,
      todoLists: todoLists.slice(0, index)
      .concat(todoLists.slice(index + 1)),
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
    const { todoLists, total, totalNotFinished } = this.state;
    const { name, numTodo, numFinished, numNotFinished, todos } = todoLists[indexList];
    this.setState({
      total: total + 1,
      totalNotFinished: totalNotFinished + 1,
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
    const { todoLists, total, totalFinished, totalNotFinished } = this.state;
    const { name, numTodo, numFinished, numNotFinished, todos } = todoLists[indexList];
    const { isFinished } = todos[indexItem];
    this.setState({
      total: total - 1,
      totalFinished: isFinished ? totalFinished - 1 : totalFinished,
      totalNotFinished: isFinished ? totalNotFinished : totalNotFinished - 1,
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
    const { todoLists, total, totalFinished, totalNotFinished } = this.state;
    return (
      <div className="TodoApp">
        <div className="App-header">
          <h1>Todos</h1>
          <button id="addListButton" onClick={this.addList}>Add Todo List</button>
        </div>
        <TodoSummary total={total} numFinished={totalFinished} numNotFinished={totalNotFinished} />
        <div className="flex-container">
          {todoLists.map((todoList, indexList) =>
            <TodoList
              className="flex-item"
              todoList={todoList}
              key={indexList}
              editListName={event => this.editListName(event, indexList)}
              deleteList={() => this.deleteList(indexList)}
              addItem={() => this.addItem(indexList)}
              deleteItem={indexItem => this.deleteItem(indexList, indexItem)}
              editItem={(event, indexItem) => this.editItem(event, indexList, indexItem)}
              onFinishedChanged={indexItem => this.onFinishedChanged(indexList, indexItem)}
            />,
          )}
        </div>
      </div>
    );
  }
}

export default TodoApp;
