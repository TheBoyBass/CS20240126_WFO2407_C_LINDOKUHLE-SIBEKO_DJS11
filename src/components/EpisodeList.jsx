import React from 'react';

const EpisodeList = ({ episodes }) => {
    return (
        <div>
            <h3>Episodes</h3>
            {episodes.map(episode => (
                <div key={episode.id}>
                    <h4>{episode.title}</h4>
                    <p>{episode.description}</p>
                </div>
            ))}
        </div>
    );
};

export default EpisodeList;