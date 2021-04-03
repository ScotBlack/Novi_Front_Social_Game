import React from "react";
import axios from 'axios';


// function addPlayer() {
//     axios.post('http://localhost:8080/test/player/newplayer',
//         { name: ''})
//             .then(res => console.log(res));
// }

function NewPlayer() {
    function addPlayer() {
        axios
            .post('http://localhost:8080/test/player/newplayer',{
                name: 'Pieterr',
                phone: 'true',
                gameId: 1
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return (
        <article className={`player new`}>
            <form className={'new_player'} onSubmit={addPlayer} >
                <input type="text" className={"new_player input"} />
                <input type="submit" value="Add Player" className={"new_player submit"} />
            </form>


        </article>
    );
}

export default NewPlayer;