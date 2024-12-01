import React from 'react'
import { fetchPreviews } from '../services/api';
import '../styles/Thumbnails.css'



const Thumbnails = () => {
    const [previews, setPreviews] = React.useState([]);
    React.useEffect(() => {
        const loadData =async () => {
            try {
                const data = await fetchPreviews();
                setPreviews(data);
            } catch (error) {
                console.error('Error fetching previews: ', error);
            }
        };
        loadData();
        }, []);
            
    return (
        
        <div className="title-cards">
            <h2>Suggested shows For You</h2>
            <div className="card-list">
                {previews.map((preview =>(
                    <div key={preview.id} className="card">
                        <img src={preview.image} alt={preview.title} className="thumbnail" />
                        <p>{preview.title}</p>
                </div>
            )))}
            </div>
        </div>
    )
}

export default Thumbnails;


