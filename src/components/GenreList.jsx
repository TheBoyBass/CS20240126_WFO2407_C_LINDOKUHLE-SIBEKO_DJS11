import React, { useEffect, useState } from 'react';
import '../styles/GenreList.css'

const genreMapping = {
    1: "Personal Growth",
    2: "Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
};
const GenreList = ({ onSelectGenre }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        setGenres(Object.entries(genreMapping).map(([id, title]) => ({ id, title })));
    }, []);

    return (
        <div className='genre-list'>
            <h2>Find your show by genre</h2>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id} onClick={() => onSelectGenre(genre.id)}>
                        {genre.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;
