import { Ellipsis, X } from "lucide-react";

interface IPost {
    ProfilePicture: any;
    Name: String;
    About: String;
    UpdatedAt: number;
    globeIcon: any;
    AboutPost: String;
    PostImage?: any;
    LikeCount: Number;

}

export function Post(props: IPost){
    function displayTime(ms: number){
        const seconds = Math.floor(ms/1000);
        const minutes = Math.floor(seconds/60);
        const hours = Math.floor(minutes/60);
        const days = Math.floor(hours/24);
        const months = Math.floor(days/12);

        if(months !== 0){
            return `${months} months ago` 
        }
        if(days !== 0){
            return `${days} days ago`
        }
        if(hours !== 0){
            return `${hours} hours ago`
        }
        if(minutes !== 0){
            return `${minutes} minutes ago`
        }
        return "Recently" 

    }

    return <div style={{padding: 5, backgroundColor: "white", borderRadius: 15, border: "1px solid lightgray"}}>
                <div style={{display: "flex", justifyContent: "space-between", padding:10}}>
                    <div style={{display: "flex"}}>
                        <div>
                            <img src={props.ProfilePicture}
                            width={60}
                            style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div>
                            <div  style={{ paddingLeft: 9, paddingTop: 3, fontSize: 20, fontWeight: 545}}>
                                {props.Name}
                            </div>
                            <div style={{paddingLeft: 9, fontSize: 15, fontWeight: 230, color: "#777", }}>
                                {props.About}
                            </div>
                            <div style={{display:"flex"}} >
                                <div style={{paddingLeft: 9, fontSize: 15, fontWeight: 230, color: "#777", }} >
                                    {displayTime(Date.now() - new Date(props.UpdatedAt).getUTCMilliseconds())}
                                </div>
                                <div style={{paddingTop: 2, paddingLeft: 5}}>
                                    {props.globeIcon} 
                                </div>
                               
                            </div>                           
                        </div>
                        
                    </div>
                    <div style={{padding: 5, display: "flex", color: "#161616"}}>
                       <div style={{paddingRight: 20}}>
                            <Ellipsis />
                       </div>
                       <div>
                            <X />
                       </div>
                    </div>
                </div>
               <div style={{padding: 10}}>
                     <div style={{paddingBottom: 10, fontWeight: 500, color: "b7fedfed"}}>
                        {props.AboutPost}
                    </div>
            
                    {props.PostImage && <img src= {props.PostImage} style= {{display: "block", width: "100%", borderRadius: 7}}/>}
                

               </div>
            </div>
}