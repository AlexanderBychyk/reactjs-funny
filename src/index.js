import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';
import App from './components/App';
import Visible from './components/Visible';

class WebPage extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <App />
        <Visible />
      </div>
    );
  }
};

ReactDOM.render(<WebPage />, document.getElementById('root'));
