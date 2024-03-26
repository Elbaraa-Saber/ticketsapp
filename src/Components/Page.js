import SortTick from "./SortTick";
import Tickets from "./Tickets";
import '../Css/page.css'
import TicketsNew from "./TicketsNew";
import { Route, Routes } from "react-router";
import NotTrans from "./NotTrans";
import OneTrans from "./OneTrans";
import TwoTrans from "./TwoTrans";
import ThreeTrans from "./ThreeTrans";


function Page (){
    return (
        <div className="content" >
            {/* <Tickets/> */}
            <Routes>
                <Route path="/" element={<TicketsNew/>}/>
                <Route path="/zero" element={<NotTrans/>}/>
                <Route path="/one" element={<OneTrans/>}/>
                <Route path="/two" element={<TwoTrans/>}/>
                <Route path="/three" element={<ThreeTrans/>}/>
            </Routes>
            
        </div>
    );
}

export default Page;