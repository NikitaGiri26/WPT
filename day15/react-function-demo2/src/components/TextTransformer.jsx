import React, { Component } from 'react';

class TextTransformer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      transformedText: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleUpperCase = () => {
    const upper = this.state.text.toUpperCase();
    this.setState({ transformedText: upper });
  };

  handleLowerCase = () => {
    const lower = this.state.text.toLowerCase();
    this.setState({ transformedText: lower });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter text"
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        <button onClick={this.handleUpperCase} style={{ marginRight: '0.5rem' }}>
          UPPER CASE
        </button>
        <button onClick={this.handleLowerCase}>
          lower case
        </button>
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Output: {this.state.transformedText}
        </div>
      </div>
    );
  }
}

export default TextTransformer;
