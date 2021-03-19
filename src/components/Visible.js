import React from 'react';

export default class Visible extends React.Component {
  state = {
    visibility: false,
  };

  handleToggleVisibility = () => {
    this.setState((prevState) => ({
      visibility: !prevState.visibility,
    }));
  };

  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <h1 className="header__title">Visibility Toggle</h1>
          </div>
        </div>
        <div className="container">
          <button className="big-button" onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
          {this.state.visibility
            ? <div className="container"><div className="widget"><p className="widget__message">Hey! These are some details you can now see!</p></div></div>
            : undefined}
        </div>
      </div>
    );
  };
};
