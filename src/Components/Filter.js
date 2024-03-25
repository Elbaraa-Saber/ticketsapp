import '../Css/filter.css'

function Filter (){
    return (
        <>
            <div className="filter" >
                <h2>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
                <div className="box" >
                    <input type="checkbox" className='checked' id="all" />
                    <label htmlFor="all" >Все</label>
                </div>
                <div className="box" >
                    <input type="checkbox" className='checked' id="zero"  />
                    <label htmlFor="zero" >Без пересадок</label>
                </div>
                <div className="box" >
                    <input type="checkbox" id="one" />
                    <label htmlFor="one" >1 пересадка</label>
                </div>
                <div className="box" >
                    <input type="checkbox" id="two"  />
                    <label htmlFor="two" >2 пересадка</label>
                </div>
                <div className="box" >
                    <input type="checkbox" id="three"  />
                    <label htmlFor="three" >3 пересадка</label>
                </div>
            </div>
        </>
    );
}

export default Filter;