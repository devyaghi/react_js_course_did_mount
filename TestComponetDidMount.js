import React from "react";

export default class TestComponentDidMount extends React.Component{

   // Mounting , updating , unmounting


    constructor() {
        super();
        this.state={
        color:"white"
        }
    }




    render() {
        return (<div>color is {this.state.color}</div>)
    }

    componentDidMount() {

        setTimeout(()=>{
            this.setState({color:"Red"})
        },5000)

    }


}