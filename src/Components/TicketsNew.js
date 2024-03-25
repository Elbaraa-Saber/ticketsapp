import { useEffect } from "react";

function TicketsNew (){

    useEffect (() => {
        fetch("https://raw.githubusercontent.com/Elbaraa-Saber/ticketsFakeApi/main/data.json")
        .then((response) => response.json())
        .then((data) => console.log(data))
    });

    return(
        <div className="tickets" >
            <h1>Flight Tickets</h1>
        </div>
    );
}

export default TicketsNew;