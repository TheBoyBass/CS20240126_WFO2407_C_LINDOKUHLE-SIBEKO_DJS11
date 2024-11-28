import React from 'react';
import { fetchPreviews } from '../services/api';

const ShowDetail = ({ show }) => {
    if (!show) return <div>Select a show to see details.</div>;

    return (
        <div>
            <h2>{show.title}</h2>
            <p>Description: {show.description}</p>
            <p>Average Rating: {show.averageRating}</p>
        </div>
    );
};

export default ShowDetail;