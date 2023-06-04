import './App.css';

import * as React from 'react';

import {Routes, Route} from 'react-router-dom';

import Login from './components/pages/Login';
import Menu from './components/pages/Menu';
import Game from './components/pages/Game';

function App() {

    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="menu" element={<Menu/>} />
            <Route path="game" element={<Game/>} />
        </Routes>
    </div>

  );
}



export default App;
