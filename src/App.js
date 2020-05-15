import React from 'react';

export default class App extends React.Component
{
    constructor()
    {
        super()
        this.state = ({

        })
    }

    componentDidMount()
    {
        let url = "http://api.open-notify.org/astros.json"
        fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
    }

    render()
    {
        return null
    }
}