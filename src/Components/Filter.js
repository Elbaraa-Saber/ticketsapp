import { useState } from 'react';
import '../Css/filter.css';
import { Link, useHistory, useNavigate } from 'react-router-dom';

function Filter() {
    const [selectedCheckbox, setSelectedCheckbox] = useState({
        all: true,
        zero: false,
        one: false,
        two: false,
        three: false,
    });
    const navigate = useNavigate();
    const handleCheckboxClick = (id) => {
        if (selectedCheckbox === id) {
            // Do nothing if clicking on the same input
            return;
        }
        setSelectedCheckbox(id);
    };
    const handleLinkClick = (id) => {
        setSelectedCheckbox(id); // Add class to input when link is clicked
    };
    const handleInputChange = (id) => {
        handleCheckboxClick(id);
        switch (id) {
            case 'all':
                navigate('/');
                break;
            case 'zero':
                navigate('/zero');
                break;
            case 'one':
                navigate('/one');
                break;
            case 'two':
                navigate('/two');
                break;
            case 'three':
                navigate('/three');
                break;
            default:
                break;
        }
    };


    return (
        <>
            <div className="filter">
                <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
                <div className="box">
                    <input
                        type="checkbox"
                        className={selectedCheckbox === 'all' ? 'clicked' : ''}
                        id="all"
                        onClick={() => handleInputChange('all')}
                        />
                    <label htmlFor="all">
                        <Link to={"/"} className='link-style' onClick={() => handleLinkClick('all')}>Все</Link>
                    </label>
                </div>

                <div className="box">
                    <input
                        type="checkbox"
                        className={selectedCheckbox === 'zero' ? 'clicked' : ''}
                        id="zero"
                        onClick={() => handleInputChange('zero')}
                    />
                    <label htmlFor="zero">
                        <Link to={"/zero"} className='link-style' onClick={() => handleLinkClick('zero')}>Без пересадок</Link>
                    </label>
                </div>

                <div className="box">
                    <input
                        type="checkbox"
                        className={selectedCheckbox === 'one' ? 'clicked' : ''}
                        id="one"
                        onClick={() => handleInputChange('one')}
                    />
                    <label htmlFor="one">
                    <Link to={"/one"} className='link-style' onClick={() => handleLinkClick('one')}>1 пересадка</Link>
                    </label>
                </div>

                <div className="box">
                    <input
                        type="checkbox"
                        className={selectedCheckbox === 'two' ? 'clicked' : ''}
                        id="two"
                        onClick={() => handleInputChange('two')}
                    />
                    <label htmlFor="two">
                        <Link to={"/two"} className='link-style' onClick={() => handleLinkClick('two')}>2 пересадка</Link>
                    </label>
                </div>

                <div className="box">
                    <input
                        type="checkbox"
                        className={selectedCheckbox === 'three' ? 'clicked' : ''}
                        id="three"
                        onClick={() => handleInputChange('three')}
                    />
                    <label htmlFor="three">
                        <Link to={"/three"} className='link-style' onClick={() => handleLinkClick('three')}>3 пересадка</Link>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Filter;
