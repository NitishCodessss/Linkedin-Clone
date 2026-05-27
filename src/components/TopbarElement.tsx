import { FileX } from "lucide-react";

interface ITopBarElements{
    icon: any;
    title: String;
    selected: boolean;
}

export function TopbarElement({icon, title, selected}: ITopBarElements){
    return <div style={{ color: selected? "black":"grey"}}>
                <div className="TopbarElements" style={{marginLeft: 20, paddingBottom: 5, borderBottom: selected? "2px solid black":"", cursor: "pointer" }}>
                    <div  style={{ display: "flex", justifyContent: "center", paddingBottom: 6}}>
                        {icon}
                    </div>
                        {title}
                </div>
            </div>
}