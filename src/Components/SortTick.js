import React from "react";
import '../Css/sortTick.css'
import { useState } from "react";

function SortTick({ onSortChange }) {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleClick = (button) => {
        setSelectedButton(button);
        onSortChange(button === 'price' ? 'price' : 'time');
    };

    return (
        <div className="choises">
            <div className={`choise ${selectedButton === 'price' ? 'chosen' : ''}`}>
                <button className="price" onClick={() => handleClick('price')}>САМЫЙ ДЕШЕВЫЙ</button>
            </div>
            <div className={`choise ${selectedButton === 'time' ? 'chosen' : ''}`}>
                <button className="time" onClick={() => handleClick('time')}>САМЫЙ БЫСТРЫЙ</button>
            </div>
        </div>
    );
}

export default SortTick;