import React from 'react'
import axios from "axios";
// import axios from 'axios';



class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {id: props.id, name:props.name,color: props.color };
    }

    toggleColor (id) {
        axios.get('http://localhost:8080/test/player/toggle/' + id , {timeout:500})
            .then(res  => {
                console.log(res.data.color)
                this.setState({color: res.data.color} )
            })
            .catch(error => console.log(error));
    }


    componentDidMount() {
        this._isMounted = true;
        console.log("player Did Mount")
    }

    componentDidUpdate() {
        console.log("player Did Update")
    }

    render() {
        return (
            <article onClick= {() => this.toggleColor(this.state.id)} className={`player ${this.state.color}`}>
                <h2 className={"player_name"}>{this.state.name}</h2>
            </article>
        )
    }
}

export default Player;


// function Player(props) {
//     function toggleColor() {
//         console.log(`${props.name} with ID: ${props.id} has been clicked!`)
//
//         axios.get('http://localhost:8080/test/player/toggle/' + props.id, {timeout:500})
//             .then(res  => console.log(`${props.name} color changed to ${res.data.color}`))
//             .catch(error => console.log(error))
//
//     }