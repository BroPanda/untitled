import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom"
import MyFetch from "./zzzzz/test";
import LoginPage from "./LoginPage/loginPage";
import ConstrProjPage from "./ConstrProjPage/ConstrProjPage";

ReactDOM.render(
    <>
        <BrowserRouter>
            <Route exact="/" component={LoginPage}/>
            <Route path="/constr_project" component={ConstrProjPage}/>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
