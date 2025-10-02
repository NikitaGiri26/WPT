import React, { Component } from 'react';
import FunctionComponent from './FunctionComponent';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
    };
    console.log('Constructor: Component is being constructed');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Syncing props to state');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component update?');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount');
  }

  toggleChild = () => {
    this.setState((prevState) => ({ showChild: !prevState.showChild }));
  };

  render() {
    console.log('Render: Component rendering');
    return (
      <div style={{ border: '1px solid blue', padding: '10px' }}>
        <h2>Class Component</h2>
        <button onClick={this.toggleChild}>
          {this.state.showChild ? 'Hide' : 'Show'} Function Component
        </button>
        {this.state.showChild && <FunctionComponent />}
      </div>
    );
  }
}

export default ClassComponent;
