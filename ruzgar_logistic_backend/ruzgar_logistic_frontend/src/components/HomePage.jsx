import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
    const [{ title, body }, setContent] = useState({ title: '', body: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Using Axios to fetch data
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/homepage/');
                setContent({ title: response.data.title, body: response.data.body });
                setIsLoading(false);
            } catch (error) {
                setError(error.response ? error.response.data.message : error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}

export default HomePage;
