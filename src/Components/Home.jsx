import Homepage from "./Homepage";
import Sidenavbar from "./Sidenavbar";

function Home({sidebar,search}){
    // Home component rendering sidebar and homepage
    return(<>
    <div className="flex">
     <Sidenavbar sidebar={sidebar}/>
     <Homepage sidebar={sidebar} search={search}/>
     </div>
    </>)
}
export default Home;