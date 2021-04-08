import React from 'react';
import axios from 'axios';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted= false;

        this.state = {
            class:'header_status red',
            gameId: null,
            canStart: false,
            status:'',
            gameType:'FFA',
            points: 50
        };
    }


    componentDidMount() {
        this._isMounted = true;

        axios.get('http://localhost:8080/lobby/7/status',{ timeout: 500})
            .then (res => this._isMounted && this.setState({
                class: res.data.canStart? 'header_status green' : 'header_status red' ,
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
                    Game: {this.state.gameType}
                </article>

                <p className={this.state.class}> {this.state.status}</p>
                <div className={"header_startbox"}>
                    <button type ="submit" className={"header_start_button"}>Start</button>
                </div>

            </div>
        )

    }
}

export default Header;