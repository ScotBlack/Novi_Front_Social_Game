import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Player from "./components/lobby/Player";
import axios from "axios";

// ReactDOM.render(
//   <React.StrictMode>
//     <Player />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



class Playerz extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            color: null,
            name: null
        };
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('http://localhost:8080/test/player/3', {timeout: 500})
                .then(res => this.setState({color: res.data.color, name: res.data.name}))
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return <article className={"player " + this.state.color} ><h2 className={"player_name"}>{this.state.name}</h2></article>
    }
}

// export default Player;

ReactDOM.render(<Playerz />,document.querySelector('#root'));

reportWebVitals();
