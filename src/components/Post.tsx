interface IPost {
    ProfilePicture: any;
    Name: String;
    About: String;
    UpdatedAt: any;
    globeIcon: any;
    AboutPost: String;
    PostImage: any;
    LikeCount: Number;

}

export function Post(props: IPost){
    function displayTime(){
        
    }

    return <div style={{padding: 5,}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex"}}>
                        <img src={props.ProfilePicture}
                            width={60}
                            style={{borderRadius: "50%"}}
                        />
                        <div style={{ paddingLeft: 7,paddingTop: 5, fontSize: 20, fontWeight: 545}}>
                            {props.Name}
                            <div style={{fontSize: 15, fontWeight: 230, color: "gray", }}>
                                {props.About}
                            </div>
                            <div style={{fontSize: 15, fontWeight: 230, color: "gray", }}>
                                {props.UpdatedAt}
                            </div>
                            <span style={{}}>
                                    {props.globeIcon} 
                            </span>
                        
                           
                        </div>
                        
                    </div>
                    <div>
                       
                    </div>
                </div>

        </div>
}