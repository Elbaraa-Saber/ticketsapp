import { useEffect, useState } from "react";

function TicketsNew (){
    const [tickets, setTickets] = useState([]);

    useEffect (() => {
        fetch("https://raw.githubusercontent.com/Elbaraa-Saber/ticketsFakeApi/main/data.json")
        .then((response) => response.json())
        .then((data) => setTickets(data))
        .then(() => console.log(tickets))
    }, []);

    return(
        <div className="tickets" >
            <h1>Flight Tickets</h1>
        </div>
    );
}

export default TicketsNew;