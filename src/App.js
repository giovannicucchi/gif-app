import React from 'react';

import RandomGif from './components/RandomGif';
import TagGif from './components/TagGif';

import './App.css';

const App = () => (
    <div>
        <h1>Random GIF App</h1>
        <div className="main-container">
            <RandomGif />
            <TagGif />
        </div>
    </div>
);

export default App;