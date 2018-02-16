import React from 'react';


class Comic extends React.Component {
  render() {
    return (
      <div>
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={()=>{this.props.handleClick()}}>Generate Comics</button>
      </div>

    )
  }
}
export default Comic;
