// create your App component here
import React, {Component} from 'react'

class App extends Component {


    render(){
        return(
            <div>Rendering some stuff</div>
        )
    }
    
    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`).then(res=>res.json())
    }
}

export default App