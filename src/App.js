import React, {Component} from 'react';

export default class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(json => console.log(json))
    }

    render() {
        return(
            <div></div>
        )
    }
}
