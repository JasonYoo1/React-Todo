// import React from 'react';

// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//       </div>
//     );
//   }
// }

// export default App;



import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import ListForm from './components/TodoComponents/TodoForm';

// import './styles.css';

const todoData = [
  {
    name: 'Clean up',
    id: 123,
    purchased: false
  },
  {
    name: 'Wash Dishes',
    id: 124,
    purchased: false
  },
  {
    name: 'Study JavaScript',
    id: 1235,
    purchased: false
  },
  {
    name: 'Make Money',
    id: 1246,
    purchased: false
  },
  {
    name: 'Make Food',
    id: 1237,
    purchased: false
  },
  {
    name: 'Clean Car',
    id: 1248,
    purchased: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Dustin',
      tasks: todoData 
    };

    // this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem = id => {
    console.log(id);
    // use this.setState
    // loop through the arr
    // find which element we clicked update the "pruchased" property
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            // Same as:
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased,
            purchased: !item.purchased
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  clearPurchased = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => !item.purchased)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
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