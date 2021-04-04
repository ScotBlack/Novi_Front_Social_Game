import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {status:'Bla die Blaa'};
    }

    render() {
        return (
            <div className={"footer"}>
                <h1>{this.state.status}</h1>
                <input type={"submit"} />
            </div>

        )
    }
}

export default Footer;