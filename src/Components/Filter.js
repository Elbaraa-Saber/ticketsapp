import '../Css/filter.css'
import { useState } from 'react';

function Filter (){
    const [isChecked, setIsChecked] = useState({
        all: false,
        zero: false,
        one: false,
        two: false,
        three: false
    });

    const handleCheckboxClick = (id) => {
        setIsChecked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <>
            <div className="filter" >
                <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
                <div className="box" >
                    <input
                        type="checkbox"
                        className={isChecked.all ? 'clicked' : ''}
                        id="all"
                        onClick={() => handleCheckboxClick('all')}
                    />
                    <label htmlFor="all" >Все</label>
                </div>
                <div className="box" >
                    <input
                        type="checkbox"
                        className={isChecked.zero ? 'clicked' : ''}
                        id="zero"
                        onClick={() => handleCheckboxClick('zero')}
                    />
                    <label htmlFor="zero" >Без пересадок</label>
                </div>
                <div className="box" >
                    <input
                        type="checkbox"
                        className={isChecked.one ? 'clicked' : ''}
                        id="one"
                        onClick={() => handleCheckboxClick('one')}
                    />
                    <label htmlFor="one" >1 пересадка</label>
                </div>
                <div className="box" >
                    <input
                        type="checkbox"
                        className={isChecked.two ? 'clicked' : ''}
                        id="two"
                        onClick={() => handleCheckboxClick('two')}
                    />
                    <label htmlFor="two" >2 пересадка</label>
                </div>
                <div className="box" >
                    <input
                        type="checkbox"
                        className={isChecked.three ? 'clicked' : ''}
                        id="three"
                        onClick={() => handleCheckboxClick('three')}
                    />
                    <label htmlFor="three" >3 пересадка</label>
                </div>
            </div>
        </>
    );
}

export default Filter;