import { SquarePlay, FileImage, Newspaper } from "lucide-react";
interface ICreatePost {
    ProfilePicture: any;
}

export function CreatePost(props: ICreatePost){
    return <div style={{padding: 10, backgroundColor: "white", borderRadius: 15, border: "1px solid lightgray"}}>
        <div style={{padding: 5, display: "flex", alignItems:"center"}}>
            <div>
                <img src={props.ProfilePicture} width={60} style={{borderRadius: "50%"}}/>
            </div>
            <div style={{marginLeft: 10}}>
                <input className= "searchBox"type="text" placeholder="Start a post" style={{color: "lightgray", padding: 16, paddingRight: 400, borderRadius: 30,}} />
            </div>
        </div>

        <div style={{display: "flex", justifyContent: "space-evenly", height: 50}}>
            <div style={{ display:"flex",alignItems: "center",}}>
                <SquarePlay />
                <h5 style={{fontSize: 20, fontWeight: 300, paddingLeft: 5,}}>Video</h5>
            </div>
            <div style={{ display:"flex",alignItems: "center", paddingLeft: 20, }}>
                <FileImage />
               <h5 style={{fontSize: 20, fontWeight: 300, paddingLeft: 5}}>Photo</h5>
            </div>
            <div style={{ display:"flex",alignItems: "center"}}>
                <Newspaper />
                <h5 style={{fontSize: 20, fontWeight: 300, paddingLeft: 5}}>Article</h5>
            </div>
        </div>
    </div>
}