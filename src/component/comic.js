import React from 'react';


class Comic extends React.Component {
  render() {
    return (
      <div>
            <button onClick={()=>{this.props.handleClick()}}>This will do something soon</button>
      </div>

    )
  }
}
export default Comic;
