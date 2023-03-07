import { Component } from "react"

function Header(props) {
    return(<h1>Hello I am {props.data}</h1>)
}

export default Header



class Menu extends Component{
    render(){
        return(<h1>Hello i am {this.props.menu}</h1>)
    }
}

export {Menu}