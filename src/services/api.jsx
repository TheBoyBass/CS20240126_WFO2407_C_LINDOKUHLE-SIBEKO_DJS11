export const fetchPreviews = async () => {
    const response = await fetch('https://podcast-api.netlify.app');
    if (!response.ok) {
        throw new Error(`HTTP error! status: Failed to fetch previews`);
    }
    return response.json();
};