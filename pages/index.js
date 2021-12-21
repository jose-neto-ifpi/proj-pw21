import React from 'react';

class ComponenteComEvento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mensagem: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
 
  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }
  
  handleEnter() {
    this.setState((state) => ({
      mensagem: state.mensagem + 'Você pressionou a tecla enter! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>

        <h1>{this.state.mensagem}</h1>
      </div>
    );
  }
};

export default ComponenteComEvento;