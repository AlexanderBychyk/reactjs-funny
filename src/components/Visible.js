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
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility
          ? <div><p>Hey! These are some details you can now see!</p></div>
          : undefined}
      </div>
    );
  };
};
