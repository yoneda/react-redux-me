import React from "react";

/**
 * PlusButtonWithAnimated
 * 
 * @param {function} updateHandler 状態が変更されたときに通知する
 */

class PlusButtonWithAnimated extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  update(isOpen){
    this.setState({isOpen: isOpen});
    this.props.updateHandler(this.state.isOpen);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.update(!this.state.isOpen)}>button</button>
        <p>{this.state.isOpen ? "on" : "off"}</p>
      </div>
    );
  }
}

export default PlusButtonWithAnimated;