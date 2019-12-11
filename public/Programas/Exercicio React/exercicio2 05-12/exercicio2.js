class CursoHeader extends  React.Component {
    render() {
        return (
        <h1>{this.props.titulo}</h1>
        )
    }
}

class CursoContent extends  React.Component {
    render() {
        return (
        <p><b>{this.props.negrito}</b>{this.props.texto}</p>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <CursoHeader titulo = "Desenvolvedor Full Stack"/>
                <CursoContent negrito = "Objetivo: " texto = " Aprender tecnologias incriveis para construir coisas magnificas."/>
                <CursoContent negrito = "Tecnologias aprendidas:" texto = " JavaScript, TypeScript, ReactJS, Angular, Python, NodeJs entre outras."/>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("conteudo"))

