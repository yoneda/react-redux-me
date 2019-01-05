import React from "react";

class DetectFirstload extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.offFirstloadHandler();
  }
  render(){
    return(
      <>
      </>
    )
  }
}

export default DetectFirstload;