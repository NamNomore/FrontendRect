import React, { Component } from 'react';
import { Link } from "react-router-dom";
class nav extends Component {
    render() {
        return (
            <div className="menu">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
                        <ul className="nav ml-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active">
                            <Link to="/home"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link to="/register"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default nav;