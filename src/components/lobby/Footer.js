import React from 'react';
import axios from "axios";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted= false;


        this.state = {
            points: 50,
            gameType:'FFA'};
    }



    onPointsChange= (e) => {
        axios.get('http://localhost:8080/lobby/7/setPoints/' + e, {timeout:500})
                .then(res  => {
                    console.log(res.data)
                })
                .catch(error => console.log(error));

        this.setState({points: e});
    }

    onGameTypeChange= (e) => {
        axios.get('http://localhost:8080/lobby/7/setGameType/' + e, {timeout:500})
            .then(res  => {
                console.log(res.data)
            })
            .catch(error => console.log(error));

        this.setState({gameType: e});
    }


    componentDidMount() {
        this._isMounted = true;

    }

    componentDidUpdate() {
        this._isMounted = true;
        // console.log(this.state.points)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        console.log(this.state.points);
        return (
            <div className={"footer"}>
                <div className={"slidercontainer"}>

                    <br/>
                    <span className={"footertitle"}> Points: </span>
                    <br/>
                    <article className={"slidervalue"}  onClick={(e) => {this.onPointsChange(50)}}>50</article>
                    <article className={"slidervalue"}  onClick={(e) => {this.onPointsChange(100)}}>100</article>
                    <article className={"slidervalue"}  onClick={(e) => {this.onPointsChange(200)}}>200</article>

                    <br/><br/><br/><span className={"footertitle"}> Game Type: </span><br/>
                    <article className={"slidervalue"}  onClick={(e) => {this.onGameTypeChange("CLASSIC")}}>Classic</article>
                    <article className={"slidervalue"}  onClick={(e) => {this.onGameTypeChange("FFA")}}>FFA</article>
                    <article className={"slidervalue"}  onClick={(e) => {this.onGameTypeChange("TEAMS")}}>Teams</article>




                </div>
            </div>

        )
                }
}

export default Footer;