import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

const app = (
    <>
        <ToastContainer/>
        <BrowserRouter>
            <Suspense fallback={
                <div className="d-flex flex-column justify-content-center align-items-center"
                     style={{width: "100%", height: "100vh"}}>
                    <h2>Assalomu aleykum</h2>
                </div>}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </>
);
ReactDOM.render(app, document.getElementById('root'))
