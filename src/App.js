import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import ListForm from './components/TodoComponents/TodoForm';

// import './styles.css';

const todoData = [
  {
    name: 'Clean up',
    id: 123,
    completed: false
  },
  {
    name: 'Wash Dishes',
    id: 124,
    completed: false
  },
  {
    name: 'Study JavaScript',
    id: 1235,
    completed: false
  },
  {
    name: 'Make Money',
    id: 1246,
    completed: false
  },
  {
    name: 'Make Food',
    id: 1237,
    completed: false
  },
  {
    name: 'Clean Car',
    id: 1248,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Dustin',
      tasks: todoData 
    };
  }

  toggleItem = (id) => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newTask = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Task List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App