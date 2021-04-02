import React from 'react'
import axios from 'axios';
import ReactDOM from "react-dom";


class Player extends React.Component {

    constructor(props) {
        super(props);

        this.state = {  color: null,
                        name: null};

        axios.get('http://localhost:8080/test/player/3', { timeout: 500})
            .then(res => this.setState({color: res.data.color, name: res.data.name}))
    }


    render() {
        return <article className={"player " + this.state.color} ><h2 className={"player_name"}>{this.state.name}</h2></article>
    }
}

export default Player;

ReactDOM.render(<Player />,document.querySelector('#root'));
