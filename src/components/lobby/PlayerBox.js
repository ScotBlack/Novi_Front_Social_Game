import React from 'react'
import axios from 'axios'
import Player from "./Player";
import NewPlayer from "./NewPlayer"



class PlayerBox extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted= false;

        // this.toggleColor = this.toggleColor.bind(this);
        this.state = {players: [], errorMessage: ''};
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('http://localhost:8080/test/game/1/players',{ timeout: 500})
            .then(res => this._isMounted && this.setState({players : res.data}),
                (err => this._isMounted && this.setState({errorMessage: err})))
    }

    componentDidUpdate() {
        console.log(this.state.players)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        // let players = this.state.players;
        const players = [].concat(this.state.players)
            .sort((a, b) => a.id > b.id ? 1 : -1);


    console.log("rendered")
        return (
            <div>
                {players.map( player => <Player  key={player.id} id={player.id} name={player.name} color={player.color} phone={player.phone} />)}
                <NewPlayer />
            </div>
        )
    }
}

export default PlayerBox;