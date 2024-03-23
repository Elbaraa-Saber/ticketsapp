import '../Css/filter.css'

function Filter (){
    return (
        <>
            <div className="filter" >
                <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
                <div className="box" >
                    <input type="checkbox" className='checked' id="all" checked />
                    <label for='all' >Все</label>
                </div>
                <div className="box" >
                    <input type="checkbox" className='checked' id="zero" checked />
                    <label for='zero' >Без пересадок</label>
                </div>
                <div className="box" >
                    <input type="checkbox" id="one" checked />
                    <label for='one' >1 пересадка</label>
                </div>
                <div className="box" >
                    <input type="checkbox" id="two" checked />
                    <label for='two' >2 пересадка</label>
                </div>
                <div className="box" >
                    <input type="checkbox" id="three" checked />
                    <label for='three' >3 пересадка</label>
                </div>
            </div>
        </>
    );
}

export default Filter;