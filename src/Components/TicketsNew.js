import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import '../Css/tickets.css'

function TicketsNew (){
    const [tickets, setTickets] = useState([]);
    const apiUrl = "https://raw.githubusercontent.com/Elbaraa-Saber/ticketsFakeApi/main/data.json";

    useEffect (() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setTickets(data))
    }, []);

    return(
        <div className="tickets" >
            {tickets.map((ticket) => {
                return(
                    <div className="ticket" key={ticket.id}>
                        <Ticket ticket={ticket}  />
                    </div>
                );
            })}
        </div>
    );
}

export default TicketsNew;