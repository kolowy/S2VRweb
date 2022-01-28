import '../css/App.css';
import Button from './component/boutton';
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="App-content">
        <h1>Hello World</h1>
        <h2>Le site n'est absolument pas fini, reviens plus tard &hearts;</h2>
        <p>Paul Dufour</p>
        <p>Student at Epita</p>

        <div className="App-body">
          <Button>HELLO WORLD !</Button>
        </div>
      </div>
    );
  }
}

export default App;
