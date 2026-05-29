import { Post } from "./Post";
import { Earth } from "lucide-react";
export function MiddleBar(){
    return <div style={{marginTop: 30,marginLeft: 25, marginRight: 25}}>
                <Post ProfilePicture="https://pbs.twimg.com/profile_images/1965083687273558016/9AtJ_Xog.jpg"
                      Name="Nitish Kumar"               
                      About= "FullStack Developer(MERN) | Node.js, Express, MongoDB..."
                      UpdatedAt= {Date.now() - 30000}
                      globeIcon={<Earth size={16}/>}
                      AboutPost= "Hey there! This is my first post on LinkedIn"
                      PostImage="https://images.unsplash.com/photo-1779087750252-2525cb2576a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      
                />
    </div>
}