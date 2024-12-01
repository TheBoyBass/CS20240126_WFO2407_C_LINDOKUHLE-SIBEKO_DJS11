export const fetchPreviews = async () => {
    const response = await fetch('https://podcast-api.netlify.app');
    if (!response.ok) {
        throw new Error(`HTTP error! status: Failed to fetch previews`);
    }
    return await response.json();
};

export const fetchGenreByID= async (genreid) => {
    const response = await fetch(`https://podcast-api.netlify.app/genre/${genreid}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: Failed to fetch genre by ID`);
    }
    return await response.json();

}

export const fetchShowsByShowID= async (showid) => {
    const response = await fetch(`https://podcast-api.netlify.app/id/${showid}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: Failed to fetch shows by show ID`);
    }
    return await response.json();

}


