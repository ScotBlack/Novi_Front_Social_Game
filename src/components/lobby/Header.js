import React from 'react';
import axios from 'axios';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted= false;

        this.state = {
            gameId: null,
            canStart: false,
            status:'',
            gameType:'FFA',
            points: 50
        };
    }


    componentDidMount() {
        this._isMounted = true;

        axios.get('http://localhost:8080/test/game/1/lobbyHeader',{ timeout: 500})
            .then (res => this._isMounted && this.setState({
                gameId: res.data.gameId,
                canStart : res.data.canStart,
                status: res.data.status,
                gameType: res.data.gameType,
                points: res.data.points
            }),
                (err => this._isMounted && this.setState({errorMessage: err})))
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="lobby_header">>
                <h1 className={"header_title"}>Game Lobby</h1>
                <article className={"header_info"}>
                    ID: {this.state.gameId}
                </article>
                <article className={"header_info"}>
                    Points: {this.state.points}
                </article>
                <article className={"header_info"}>
                    GameType: {this.state.gameType}
                </article>

                <p className={"header_status red"}> {this.state.status}</p>
                <div className={"header_startbox"}>
                    <button type ="submit" className={"header_start_button"}>Start</button>
                </div>

            </div>
        )

    }
}

export default Header;