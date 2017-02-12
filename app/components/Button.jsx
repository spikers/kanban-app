import React from 'react';

class Button extends React.Component {
  render() {
    const notes = {notes};
    return <button className="add-note" onClick={this.addNote}>+</button>;
  }

  addNote = () => {
    this.setState({notes: [...this.state.notes, {id: uuid.v4(),task: 'Lonono'}]
    });
  }

}



export default Button;