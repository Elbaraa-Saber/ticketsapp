import Company from '../imgs/Company.png'
import React, { useEffect, useState } from 'react';

function Ticket (props){
    const { ticket } = props;
    const departureDateTime = new Date(ticket.departure_at);
    const returnDateTime = new Date(ticket.arrive_at);
    const departureTime = departureDateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    const returnTime = returnDateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
    const timeRange = `${departureTime} - ${returnTime}`;
    const timeDifferenceInMinutes = Math.abs(returnDateTime - departureDateTime) / 60000;

    var hours = Math.floor(timeDifferenceInMinutes / 60);
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

    const result = `${hours}:${roundedMinutes < 10 ? '0' : ''}${roundedMinutes}`;

    return(        
        <>
            <div className="price" >
                <span>{ticket.price} <i className="fa-solid fa-ruble-sign"></i></span>
                <img src={Company} alt="Logo of company"></img>
            </div>
            <div className="info">
                <div className="time">
                    <span>{ticket.origin} - {ticket.destination}</span>
                    <span>{timeRange}</span>
                </div>
                <div className="hours">
                    <span>В Пути</span>
                    <span>{result}</span>
                </div>
                <div className="line">
                    <span>{ticket.transfers} TRANSFERS</span>
                    <span>transfer</span>
                </div>
            </div>
        </>
    );
}

export default Ticket;