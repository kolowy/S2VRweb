import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { App, Info } from './js/pages/App'
import Header from './js/component/header'
import Footer from './js/component/footer';
import Author from './js/pages/Author'
import Credit from './js/pages/credit';
import NoFound from './js/pages/NoFound';
import ScrollToTop from './js/component/scrollToTop';

const routing = (
  <Router>
    <ScrollToTop />
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/S2VRweb/info" element={<Info />} />
        <Route path="/S2VRweb" element={<App />} />
        <Route path='/S2VRweb/Author' element={<Author />} />
        <Route path="/S2VRweb/Credit" element={<Credit />} />
        <Route path="/S2VRweb/*" element={<NoFound />} />
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
