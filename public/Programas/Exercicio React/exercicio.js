import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {


  getTitulo(titulo) {
    return <h1>{titulo}</h1>
  }
  getParagrafo(p, p2) {
    return <p>{p}{p2}</p>
  }


  textoTitulo = this.getTitulo('Desenvolvedor Full Stack')
  textop = this.getParagrafo('Objetivo   ','Texto')

  render() {
   return(
     <div>
      {this.textoTitulo}
      {this.textop}
     </div>
)
}
}


render(<App />, document.getElementById('root'));
