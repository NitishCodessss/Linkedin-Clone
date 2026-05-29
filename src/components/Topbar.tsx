import { SearchBar } from "./SearchBar"
import { TopbarElement } from "./TopbarElement"
import { TopbarElementsWithDropdown } from "./TopbarElementsWithDropdown"
import {House, Bell, Workflow, BriefcaseBusiness, MessageCircleMore, User, Grid3x3} from "lucide-react";
export function Topbar(){
    return <div style={{width:"100%", height: "8vh", backgroundColor: "white"}}>
                <div  style= {{display: "flex", justifyContent: "space-between", marginLeft: 150, marginRight: 150, padding: 5, backgroundColor: "white"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src="https://www.svgrepo.com/show/70809/linkedin.svg" height={35}/> 
                            < SearchBar placeholder="Search"/>

                    </div>
                    <div style={{display: "flex"}}>
            < TopbarElement title={"Home"} icon={<House />} selected={true}/>
            < TopbarElement title={"My networks"} icon={<Workflow />} selected={false}/>
            < TopbarElement title={"Jobs"} icon={<BriefcaseBusiness />} selected={false}/>
            < TopbarElement title={"Messaging"} icon={<MessageCircleMore />} selected={false}/>
            < TopbarElement title={"Notifications"} icon={<Bell />} selected={false}/>


            < TopbarElementsWithDropdown title={"Nitish Kumar"} icon = {<User />} selected={false}/>
            < TopbarElementsWithDropdown title={"For Businesses"} icon={<Grid3x3 />}selected={false}/>
        </div>        
    </div>
           </div>
} 
