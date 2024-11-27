export const fetchPreviews = async () => {
    const response = await fetch('https://podcast-api.netlify.app');
    return response.json();
};