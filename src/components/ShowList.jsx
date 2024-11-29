import React, { useEffect, useState } from 'react';
import { fetchPreviews } from '../services/api';
import '../styles/ShowList.css'; // Import the new CSS file

const genreMapping = {
    1: "Personal Growth",
    2: 'Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
};

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
            <h2>Continue Listening for TheBoyBass</h2>
            <div className="show-list"> {/* Flex container */}
                {shows.map(show => (
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


