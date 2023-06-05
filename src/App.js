import './App.css';

import * as React from 'react';

import {Routes, Route} from 'react-router-dom';

import Login from './components/pages/login';
import Menu from './components/pages/menu';
import Game from './components/pages/Game';
import GameSelect from './components/pages/GameSelect';

function App() {

    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="menu/:id" element={<Menu/>} />
            <Route path="game" element={<Game/>} />
            <Route path="selectGame" element={<GameSelect/>} />
        </Routes>
    </div>

  );
}



export default App;
