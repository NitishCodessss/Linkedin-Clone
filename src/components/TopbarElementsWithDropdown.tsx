import { ChevronDown } from "lucide-react";
interface ITopbarElementsWithDropdown{
    icon: any;
    title: String;
    selected: boolean;
}

export function TopbarElementsWithDropdown({icon, title, selected}: ITopbarElementsWithDropdown){
    return <div style={{color: selected? "black":"gray"}}> 
                <div className= "TopbarElements"style={{marginLeft: 20,paddingBottom: 5, borderBottom: selected? "2px solid black":"", cursor: "pointer"}}>
                    <div style={{ display: "flex", justifyContent: "center", paddingBottom: 6}}>
                        {icon}
           
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        {title}
                        <ChevronDown />
                    </div>
                </div>
            </div>
}