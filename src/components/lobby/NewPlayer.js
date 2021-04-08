import React from "react";
import axios from 'axios';




class NewPlayer extends React.Component  {
    state= {name:''}

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit= event => {
        // event.preventDefault();

        console.log("got here")

        const newPlayer = {
            name: this.state.name,
            phone: "true",
            gameId:1
        }

        axios
            .post('http://localhost:8080/player/join',{
                name:this.state.name,
                phone:"true",
                gameId:5
            })
            .then(res => console.log(newPlayer))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <article className={`player new`}>
                <form className={'new_player'} onSubmit={this.handleSubmit}>
                    <input type="text" className={"new_player input"} onChange={this.handleChange} />
                    <input type="submit" value="Add Player" className={"new_player submit"}/>
                </form>
            </article>
        );
    }
}

export default NewPlayer;