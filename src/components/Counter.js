import React from 'react';

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    const value = localStorage.getItem('count');
    this.setState(() => ({ count: value }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  };

  handleAddOne = () => {
    this.setState((prevState) => ({
      count: parseInt(prevState.count, 10) + 1,
    }));
  };

  handleMinusOne = () => {
    this.setState((prevState) => ({
      count: parseInt(prevState.count, 10) - 1,
    }));
  };

  handleReset =() => {
    this.setState(() => ({ count: 0 }));
  };

  render() {
    const style = {
      // eslint-disable-next-line quotes
      display: "inline-block",
      // eslint-disable-next-line quotes
      width: "fill-content",
      // eslint-disable-next-line quotes
      marginInline: "10px",
      // eslint-disable-next-line quotes
      borderWidth: "2px",
      // eslint-disable-next-line quotes
      borderStyle: "solid",
      // eslint-disable-next-line quotes
      borderRadius: "10px",
      // eslint-disable-next-line quotes
      padding: "10px",
    };
    return (
      <div style={style}>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  };
}
