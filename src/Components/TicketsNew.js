import React, { useEffect, useState } from "react";
import Ticket from "./Ticket";
import '../Css/tickets.css';
import SortTick from "./SortTick";


function TicketsNew() {
    const [tickets, setTickets] = useState([]);
    const [sortedTickets, setSortedTickets] = useState([]);
    const apiUrl = "https://raw.githubusercontent.com/Elbaraa-Saber/ticketsFakeApi/main/data.json";

    useEffect(() => {
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setTickets(data));
    }, []);


    const calculateTimeDifference = (ticket) => {
        const departureDateTime = new Date(ticket.departure_at);
        const returnDateTime = new Date(ticket.arrive_at);
        const timeDifferenceInMinutes = Math.abs(returnDateTime - departureDateTime) / 60000;

        let hours = Math.floor(timeDifferenceInMinutes / 60);
        const minutes = Math.floor(timeDifferenceInMinutes % 60);

        let roundedMinutes;
        if (minutes <= 7.5) {
            roundedMinutes = 0;
        } else if (minutes <= 22.5) {
            roundedMinutes = 15;
        } else if (minutes <= 37.5) {
            roundedMinutes = 30;
        } else if (minutes <= 52.5) {
            roundedMinutes = 45;
        } else {
            roundedMinutes = 0;
            hours++; 
        }

        return hours * 60 + roundedMinutes; 
    };

    const sortTicketsBy = (criteria) => {
        const sorted = [...tickets].sort((a, b) => {
            if (criteria === "price") {
                return a.price - b.price;
            } else if (criteria === "time") {
                const timeA = calculateTimeDifference(a);
                const timeB = calculateTimeDifference(b);
                return timeA > timeB ? 1 : timeA < timeB ? -1 : 0;
            }
            return 0;
        });
        setSortedTickets(sorted);
    };


    return (
        <>
            <SortTick onSortChange={sortTicketsBy} />
            <div className="tickets">
                {(sortedTickets.length ? sortedTickets : tickets).map((ticket) => {
                    return (
                        <div className="ticket" key={ticket.id}>
                            <Ticket ticket={ticket} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default TicketsNew;