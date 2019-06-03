import React from 'react';
import '../App.css';

class Applause extends React.Component {
  constructor() {
    super() 
    
    let numOfClaps = 0 //Valor default
    // O component acabou de inicializar. Vamos buscar a informacao e por numa variavel
    let savedData = localStorage.getItem("numOfClaps")
    // A saved data é uma string (local storage devolve sempre strings). Mas precisamos de converter para um numero
    // Se savedData for null entao o numero default (0) ja esta bom. Nao precisamos de fazer nada
    // Mas caso seja diferente de null como verificamos neste if. entao significa que tem la qualquer coisa que precisamos
    if (savedData !== null) {
       let numOfClaps = parseInt(savedData)
    }
    
    this.state = { // Isto é shorthand syntax para "numOfClaps: numOfClaps", tanto faz.
      numOfClaps
    }
  }
  
  makeItClap () { // Aqui queremos nao so mostrar a alteracao como tambem gravar a mesma
    localStorage.setItem("numOfClaps", this.state.numOfClaps + 1)
    this.setState({
      numOfClaps: this.state.numOfClaps + 1
    })
  }

  render () {
    return (
    <div>
      <h1>Number of Claps: {this.state.numOfClaps}</h1>
      <button onClick={this.makeItClap.bind(this)}>
        Click Here to Clap
      </button>
    </div>
    )
  }
}

export default Applause;
