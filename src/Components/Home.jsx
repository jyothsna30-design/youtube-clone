import Homepage from "./Homepage";
import Sidenavbar from "./Sidenavbar";

function Home({sidebar}){
    // Home component rendering sidebar and homepage
    return(<>
    <div className="flex">
     <Sidenavbar sidebar={sidebar}/>
     <Homepage sidebar={sidebar}/>
     </div>
    </>)
}
export default Home;