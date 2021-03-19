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
    return (
      <div>
        <div className="header">
          <div className="container">
            <h1 className="header__title">Counter</h1>
          </div>
        </div>
        
        <div className="container">
          <div className="widget">
            <p className="widget__message">Count: {this.state.count}</p>
          </div>
          <button className="button" onClick={this.handleAddOne}>+1</button>
          <button className="button" onClick={this.handleMinusOne}>-1</button>
          <button className="button" onClick={this.handleReset}>reset</button>
        </div>
      </div>
    );
  };
}
