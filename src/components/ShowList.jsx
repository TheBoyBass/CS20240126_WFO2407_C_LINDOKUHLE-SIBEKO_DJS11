import React, { useEffect, useState } from 'react';
import { fetchPreviews } from '../services/api';
import '../styles/ShowList.css'; // Import the new CSS file


const ShowList = ({ onSelectShow }) => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const loadData =async () => {
            try {
                const data = await fetchPreviews();
                const sortedShows = data.sort((a, b) => {
                    return a.title.localeCompare(b.title); //Sorts by tite A-Z order
                    });
                setShows(sortedShows);
            } catch (error) {
                console.error('Error Fetching shows: ' + error);
            }
        };
        loadData();
        }, []);

        // Function to format the date
        const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Formats to 'MM/DD/YYYY' or similar based on locale
    };

        return (
            <div>
            <h2 className='Main-Heading'>Continue Listening for TheBoyBass</h2>
            <div className="show-list"> {/* Flex container */}
                {filteredShows.map(show => (
                    <div key={show.id} className="show-item" onClick={() => onSelectShow(show)}>
                        <h3>{show.title}</h3>
                        {show.image && <img src={show.image} alt={show.title} />}
                        <p>Number of Seasons: {show.seasons}</p>
                        <p>Genre: {show.genres.map(id => genreMapping[id]).join(',')}</p>
                        <p>Last Updated: {formatDate(show.updated)}</p>
                    </div>
                ))}
            </div>
        </div>
        );
};

export default ShowList;


