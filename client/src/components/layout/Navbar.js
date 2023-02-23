import React,{Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <>
            <nav className="navbar bg-light justify-content-center">
                <Link className="navbar-brand text-dark font-weight-bold" to="/">Login & Register Page</Link>
            </nav>
            </>
        ) 
    }
}

export default Navbar;