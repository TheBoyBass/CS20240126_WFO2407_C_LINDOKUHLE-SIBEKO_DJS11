import React, { useEffect, useState } from 'react';
import { fetchPreviews } from '../services/api';

const ShowList = ({ onSelectShow }) => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const loadData =async () => {
            try {
                const data = await fetchPreviews();
                setShows(data);
            } catch (error) {
                console.error('Error Fetching shows: ' + error);
            }
        };
        loadData();
        }, []);

        return (
            <div>
                <h2>Podacst Shows</h2>
                {shows.map(show =>(
                    <div key={show.id} onClick={() => onSelectShow(show)}>
                        <h3>{show.title}</h3>
                    </div>
                ))}
            </div>
        );
};

export default ShowList;


