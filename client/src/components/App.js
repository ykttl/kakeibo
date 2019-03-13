import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AddExpenses from './AddExpenses';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <AddExpenses />
      </div>
    );
  }
}

export default App;
