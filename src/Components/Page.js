import SortTick from "./SortTick";
import Tickets from "./Tickets";
import '../Css/page.css'
import TicketsNew from "./TicketsNew";

function Page (){
    return (
        <div className="content" >
            <SortTick/>
            {/* <Tickets/> */}
            <TicketsNew/>
        </div>
    );
}

export default Page;