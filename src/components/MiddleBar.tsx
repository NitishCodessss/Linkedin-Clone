import { Post } from "./Post";
import { Earth } from "lucide-react";
export function MiddleBar(){
    return <div style={{marginTop: 30,marginLeft: 25, marginRight: 25, backgroundColor: "white", borderRadius: 15}}>
                <Post ProfilePicture="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg?cs=srgb&dl=pexels-lancehe-14653174.jpg&fm=jpg"
                      Name="Nitish Kumar"               
                      About= "FullStack Developer(MERN) | Node.js, Express, MongoDB..."
                      UpdatedAt= {Date.now()}
                      globeIcon={<Earth size={16}/>}
                      AboutPost= "Hey there! This is my first post of LinkedIN"
                />
    </div>
}