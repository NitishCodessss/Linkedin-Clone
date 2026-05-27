import { LeftBar } from "./components/LeftBar";
import { MiddleBar } from "./components/MiddleBar";
import { RightBar } from "./components/RightBar";
import { Topbar } from "./components/Topbar";
import "./index.css";

export function App() {
  return (
    <div>
      <Topbar />
      <div style={{display: "flex", marginLeft: 150, marginRight: 150}}>
        <div style={{flex: 1}}>
          <LeftBar/>
        </div>
        <div style={{flex: 3}}>
          <MiddleBar/>
        </div>
        <div style={{flex: 1}}>
          <RightBar/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
