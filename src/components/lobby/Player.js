import React from 'react'
import axios from 'axios';

function Player(props) {

function toggleColor() {
    axios
        .get('http://localhost:8080/test/player/toggle/'+props.id, {
            timeout: 5000
        })
        .then(res => console.log(res.data))
        .catch(err=> console.error(err))
}


function setNewColor() {
    Player.className = "player blue"
}

return (
        <>
            <article className={"player red"} onClick={() => toggleColor()}><h2 className={"player_name"}>{props.name}</h2></article>
            <button onClick={toggleColor} >Hello</button>
        </>
    )
};

export default Player;