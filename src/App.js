// create your App component here
import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(people => this.setState({peopleInSpace: people}))
    }

    render() {
        return this.state.peopleInSpace
    }
}
export default App