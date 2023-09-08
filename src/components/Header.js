import CICD from "./CICD";
import IAC from "./IAC";
import GITOPS from "./GITOPS";

function Header(){
    return (
        <div className="shadow-xl flex flex-row w-screen" style={{height: '20vh'}}>
            <CICD active={true} />
            <IAC />
            <GITOPS />
        </div>
    )
}

export default Header;