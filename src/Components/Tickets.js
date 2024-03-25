import axios from "axios";
import { useEffect, useState } from "react";

function Tickets() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = '15f338e33bd6a56b8f7913938cfb7f0b';
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.allorigins.win/raw?url=http://api.travelpayouts.com/v1/prices/monthly?currency=USD&origin=MOW&destination=HKT&token=${token}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log("Data updated:", data);
    }, [data]);

    return (
        <div className="tickets">
        <h1>Flight Tickets</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && Object.keys(data).length > 0 ? (
            <ul>
            {Object.keys(data).map((key) => (
                <li key={key}>
                <p>Date: {key}</p>
                <p>Price: {data[key].price}</p>
                <p>Airline: {data[key].airline}</p>
                {/* Add other details you want to display */}
                </li>
            ))}
            </ul>
        ) : (
            <p>No data available</p>
        )}
        </div>
    );
}

export default Tickets;
