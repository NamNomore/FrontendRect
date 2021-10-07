import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Content from './../component/content.js';
import Register from './../component/register.js';
class DieuHuongURl extends Component {
    render() {
        return (
            <Route>
            <div>
                    <Route exact path="/" component={Content} />                   
                    <Route exact path="/home" component={Content} />
                    <Route exact path="/register" component={Register} />       
                    {/* <Route exact path="/tin" component={News} />                   
                    <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDetail} />                   
                    <Route exact path="/lien-he" component={Contact} />   */}
            </div>
            </Route>
        );
    }
}

export default DieuHuongURl;