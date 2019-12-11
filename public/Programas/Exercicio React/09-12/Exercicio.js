 class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Imagem: <img src="pic_bulboff.gif"></img>
        }
    }

    ligar = () => {
        this.setState({ Imagem: <img src="pic_bulbon.gif"></img> })
    }

    desligar = () => {
        this.setState({ Imagem: <img src="pic_bulboff.gif"></img> })
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.ligar}>Ligar</button>
                {this.state.Imagem}
                <button type="button" onClick={this.desligar}>Desligar</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("conteudo"));