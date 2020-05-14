// create your App component here
import React, { Component } from "react";

class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(people => this.setState({people: people}))
    }

    renderPeople = () => {
        return this.state.people.map(person => <li>{person.name}</li>)
    }

    render() {
        return(
            <div>
                List of People in Space:
                <ul>{this.renderPeople()}</ul>
            </div>
        )
    }
}

export default App
