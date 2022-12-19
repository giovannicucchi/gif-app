import React from 'react';

import useGif from '../hooks/useGif';

const RandomGif = () => {
    const { gif, fetchGif } = useGif();

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={fetchGif}>Click for new GIF</button>
        </div>
    );
}

export default RandomGif;