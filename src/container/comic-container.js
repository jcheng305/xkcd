import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";
import Comic from "../component/comic.js";

class ComicCon extends React.Component {
  render() {
    return (
      <Comic handleClick={this.props.loadComics}comics={this.props.comics}></Comic>
    )
  }
}
const mapStateToProps=(state)=> {
  return state
};
export default connect (mapStateToProps, actionCreators)(ComicCon);
