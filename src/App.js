import React, { Component } from 'react';
import './bootstrap/bootstrap.min.css';

import './App.css';
import { Provider } from './context';
import Images from './components/Images/Images';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Images />
        </div>
      </Provider>
    );
  }
}

export default App;
