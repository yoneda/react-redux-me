import React from "react";
import { getAddPostsAsync } from "../actions/actions";
import { connect } from "react-redux";

class PostsContainer extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.addPostsAsyncHandler();
  }
  render(){
    return(
      <>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPostsAsyncHandler: () => dispatch(getAddPostsAsync()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostsContainer);