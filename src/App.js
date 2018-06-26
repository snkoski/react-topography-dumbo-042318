import React, { Component } from 'react';
import './App.css';

class App extends Component {
  invertColor(color) {
    // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color#35970186
    var r = parseInt(color.slice(0, 2), 16),
      g = parseInt(color.slice(2, 4), 16),
      b = parseInt(color.slice(4, 6), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }
  state = {
    color: 'ffffff',
  }

  handleKeyUp = (e) => {
    let x = ''
    x += e.target.value
    console.log(x);
    if(x.length === 6) {
    this.setState({
      color: e.target.value
    })
  } else {
    this.setState({
      color: 'ffffff'
    })
  }
  }

  render() {
    console.log(this.invertColor(this.state.color));
    return (
      <main onKeyUp={this.handleKeyUp}
        style={{
          backgroundColor: `#${this.state.color}` /* Your code here */
        }}
      >
        <input onKeyUp={this.handleKeyUp}
          placeholder="000000"
          style={{ color: `${this.invertColor(this.state.color)}` /* Your code here */ }}

        />
      </main>
    );
  }
}

export default App;
