import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from './reducers/index.js';
import ComicCon from './container/comic-container.js';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))


class App extends React.Component{
  constructor() {
    super()
    this.state= {
      comics: [],
      display: 10
    }
    }
  componentDidMount() {
    axios.get(`https://www.xkcd.com/${ getRandomInt() }/info.0.json` , {
    })
    .then((response) => {
      console.log(response.data.comics);
      this.setState({
        comics: response.data,

        display: 10
      })
  })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {

    return(
      <div>
      <h1> This is a XKCD Comic Book Generator </h1>
      <h4>{this.state.comics.title}</h4>
      <img src={this.state.comics.img}/>
      <h5>Date Created: {this.state.comics.month}-{this.state.comics.day}-{this.state.comics.year}</h5>
      <ComicCon></ComicCon>
      </div>

    )
  }
}
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(1900));
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
