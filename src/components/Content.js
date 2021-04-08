import React from 'react';
import Header from "./lobby/Header";
import PlayerBox from "./lobby/PlayerBox";
import Footer from "./lobby/Footer";


class Content extends React.Component {

    constructor(props) {
        super(props);
        // super(children);
        this.state = {
            test: ''
        }
        this._isMounted= false;
    }


    componentDidMount() {
        this._isMounted = true;
    }

    render() {
        return (
            <div className="content">
                <Header />
                <PlayerBox />
                <Footer/>

            </div>
        )

    }

}

export default Content;