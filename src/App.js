import React, { Component } from 'react'
import MainLayout from './Layouts/Main'

class App extends Component {
  render() {
    return (
      <MainLayout>
        <div className="container">
          <h1>Hello World</h1>
        </div>
      </MainLayout>
    );
  }
}

export default App;
