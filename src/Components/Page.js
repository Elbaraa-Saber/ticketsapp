import SortTick from "./SortTick";
import Tickets from "./Tickets";
import '../Css/page.css'

function Page (){
    return (
        <div className="content" >
            <SortTick/>
            <Tickets/>
        </div>
    );
}

export default Page;