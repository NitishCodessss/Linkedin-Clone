interface ISearchbar{
    placeholder: any;

}

export function SearchBar({placeholder}: ISearchbar){
    return  <div style={{ marginLeft: 10 }}>
        <input type="text" placeholder = {placeholder} style={{padding: 10, paddingRight: 140, borderRadius: 35}}/>
        
    </div>
}