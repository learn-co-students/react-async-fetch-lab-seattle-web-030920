import React, { Component } from 'react'

class App extends Component {

    constructor() {
        super()
    
        this.state = {
             spacePeople: []
        }
    }
    
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(names => (names)=>{
            this.setState({
                spacePeople: names.people
            })
        })
    }

    renderNames = () =>{
        return this.state.spacePeople.map(person => {
            <p>{person.name}</p>
        })
    }

    render() {
        return (
            <div>
                {this.renderNames()}
            </div>
        )
    }
}

export default App
