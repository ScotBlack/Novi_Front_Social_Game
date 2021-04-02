import React from 'react'
import axios from 'axios';
import ReactDOM from "react-dom";


class Player extends React.Component {

    constructor(props) {
        super(props);

        this.state = {color: null};

        axios.get('http://localhost:8080/test/player/3', { timeout: 500})
            .then(res => this.setState({color: res.data.color}))
    }


    render() {
        return <article className={"player " + this.state.color} ><h2
            className={"player_name"}>{"test"}</h2></article>
    }
}

export default Player;

// ReactDOM.render(<Player />,document.querySelector('#PlayerBox'));



// function toggleColor() {
//
//     axios
//         .get('http://localhost:8080/test/player/toggle/' + props.id, {
//             timeout: 5000
//         })
//         .then(res => console.log(res.data))
//         .catch(err => console.error(err))
// }