import React from "react";

function SortTick({ onSortChange }) {

    return (
        <div className="choises">
            <div className="choise">
                <button className="price" onClick={() => onSortChange("price")}>САМЫЙ ДЕШЕВЫЙ</button>
            </div>
            <div className="choise">
                <button className="time" onClick={() => onSortChange("time")}>САМЫЙ БЫСТРЫЙ</button>
            </div>
        </div>
    );
}

export default SortTick;