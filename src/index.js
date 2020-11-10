import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from "react-router-dom"
import LoginPage from "./LoginPage/loginPage";
import ConstrProjPage from "./ConstrProjPage/ConstrProjPage";


ReactDOM.render(
    <>
        <BrowserRouter>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/constr_project" component={ConstrProjPage}/>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);

