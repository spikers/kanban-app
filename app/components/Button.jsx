import React from 'react';

class Button extends React.Component {
  render() {
    return <button className="add-note" onClick={this.props.addNote}>+</button>;
  }
}

export default Button;