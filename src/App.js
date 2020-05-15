// create your App component here
import React ,{Component}from 'react'
export default class App extends Component{
   constructor(){
       super()
       this.state={
           people:[]
       }
   }

   
    
    render(){
  
        return (
        <div>
            {this.state.people.map((person,id)=> <h1 key={id}>{person.name}</h1>)}

        </div>
        )
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res=>res.json())
        .then(data=>this.setState({
            people:data.people}))
    }

}
