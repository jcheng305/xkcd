import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import ComicCon from './container/comic-container.js';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))


class App extends React.Component{
  render() {
    return(
      <div>
      <h1> This is a XKCD Comic Book Generator </h1>

      <ComicCon></ComicCon>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
