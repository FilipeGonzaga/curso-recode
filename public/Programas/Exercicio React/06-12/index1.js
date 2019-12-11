class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome1: "João",
            nome2: "Ana",
            nome3: "Carlos",
        };
    }

    changeName = () => {
        this.setState ({nome1: "Ribeiro"})
    }

    changeName1 = () => {
        this.setState ({nome2: "Catarina"})
    }

    changeName3 = () => {
        this.setState ({nome3: "Antonio"})
    }

    render () {
        return (
        <div>
            <p>{this.state.nome1}</p>
            <button type = "button" onClick = {this.changeName}> Alterar </button>
            <p>{this.state.nome2}</p>
             <button type = "button" onClick = {this.changeName1}> Alterar</button>
            <p>{this.state.nome3}</p>
             <button type = "button" onClick = {this.changeName3}> Alterar</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('conteudo'));