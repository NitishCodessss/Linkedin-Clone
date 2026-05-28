interface IProfileCard{
    coverImage: any;
    ProfileImage: any;
    Name: String;
    About: String;
    Location: String;
    Organization: String;
    OrgImage: any; 

}

export function ProfileCard(props: IProfileCard){
    return <div style={{height: "30vh", width: "24vh",padding: 5, margin: 5, border: "0.1px solid gray", borderRadius: 15, backgroundColor: "white"}}>
        <div  >
            <img 
            width={"100%"}
            style={{display: "block", height: 60 ,objectFit: "cover", borderRadius:15}}
            
            src= {props.coverImage} 
            />
        </div>
        <div style={{paddingLeft: 10 ,position: "relative", top: -25 }}>
            <img src ={props.ProfileImage} width={75} style={{borderRadius: "50%", border: "3px solid white"}}/>
        </div>
        <div style={{paddingBottom: 300,paddingLeft: 10}}> 
            <div style={{fontSize: 25, fontWeight: 500}}>
            {props.Name}
            </div>
            <div style={{fontSize: 15, fontWeight: 50}}>
            {props.About}
            </div>
                <div style={{fontSize: 15, fontWeight: 50, color: "gray"}}>
                    {props.Location}
                </div>
        </div>
    </div>
}