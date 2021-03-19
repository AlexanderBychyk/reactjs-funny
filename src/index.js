import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';
import App from './components/App';
import Visible from './components/Visible';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.content}
      <p>footer</p>
    </div>
  );
}
const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
)

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
