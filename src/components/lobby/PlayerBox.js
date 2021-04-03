import React from 'react'
import axios from 'axios'
import Player from "./Player";

class PlayerBox extends React.Component {

    state = {players: [], numPlayers: null, errorMessage: ''};

    componentDidMount() {
        axios.get('http://localhost:8080/test/game/1/players',{ timeout: 500})
            .then(res => this.setState({players : res.data}),
                (err => this.setState({errorMessage: err})))

    }

    render() {
        const players = this.state.players;

        return (
            <div>
                <Player/>
                {players.map( player => <h1>{player.name}</h1>)}
            </div>
        )

    }




};

export default PlayerBox;