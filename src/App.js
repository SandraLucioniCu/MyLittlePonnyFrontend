import './App.css';

import * as React from 'react';

import {Routes, Route} from 'react-router-dom';

import Login from "./components/pages/login";
import Menu from "./components/pages/menu";



function App() {

    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="menu" element={<Menu/>} />
        </Routes>
    </div>

  );
}



export default App;
