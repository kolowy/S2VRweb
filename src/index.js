import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import App from './js/App'
import Header from './js/component/header'
import Footer from './js/component/footer';
import Credit from './js/pages/credit';
import NoFound from './js/pages/NoFound';

const routing = (
  <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Credit" element={<Credit />} />
        <Route path="*" element={<NoFound />} />

      </Routes>
      <Footer className='App-footer' />
    </div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
