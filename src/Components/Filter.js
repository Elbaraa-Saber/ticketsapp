import { useState, useEffect  } from 'react';
import '../Css/filter.css';
import { Link, useHistory, useNavigate, useLocation } from 'react-router-dom';

function Filter() {
    const [selectedCheckbox, setSelectedCheckbox] = useState({
        all: true,
        zero: false,
        one: false,
        two: false,
        three: false,
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const updatedState = {
            all: path === '/',
            zero: path === '/zero',
            one: path === '/one',
            two: path === '/two',
            three: path === '/three',
        };
        setSelectedCheckbox(updatedState);
    }, [location.pathname]);

    const handleCheckboxClick = (id) => {
        if (selectedCheckbox[id]) {
            return;
        }
        setSelectedCheckbox((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleLinkClick = (id) => {
        setSelectedCheckbox((prevState) => ({
            ...prevState,
            [id]: true,
        }));
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
                        className={selectedCheckbox.all ? 'clicked' : '' || selectedCheckbox === 'all' ? 'clicked' : ''}
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
                        className={selectedCheckbox.zero ? 'clicked' : '' || selectedCheckbox === 'zero' ? 'clicked' : ''}
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
                        className={selectedCheckbox.one ? 'clicked' : '' || selectedCheckbox === 'one' ? 'clicked' : ''}
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
                        className={selectedCheckbox.two ? 'clicked' : '' || selectedCheckbox === 'two' ? 'clicked' : ''}
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
                        className={selectedCheckbox.three ? 'clicked' : '' || selectedCheckbox === 'three' ? 'clicked' : ''}
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
