import React from 'react'
import Main from "./Main"
import Footer from './Footer';
import Home from './Home'
import Shop from './Shop'
import { Container } from 'react-bootstrap'
import './Dashboard.css'
import './App.css'
import { BrowserRouter , Router, Switch, Route } from "react-router-dom"



export default function Dashboard() {
    return ( 
        <Container fluid className="px-0">
            <Main></Main>
            <BrowserRouter>
            <Switch>
            <Route path="/shop" component={Shop} />
            <Route exact path="/" component={Home} />
            </Switch>
            <Footer></Footer>
            </BrowserRouter>
        </Container>  

    );
}
 