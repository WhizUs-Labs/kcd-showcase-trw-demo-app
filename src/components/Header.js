import CICD from "./CICD";
import IAC from "./IAC";
import GITOPS from "./GITOPS";
import { useCallback,useEffect,useState } from "react";


function Header(){
    const [active,setActive] = useState(true);
    const [runIAC,setRunIAC] = useState(false);
    const [runGitOps,setRunGitOps] = useState(false);
    const [runCICD,setRunCICD] = useState(false);
    

    const run_animations = useCallback(async () => {
        setRunIAC(true);
        await new Promise(r => setTimeout(r, 14000));
        setRunIAC(false);
        await new Promise(r => setTimeout(r, 1000));
        setRunCICD(true);
        await new Promise(r => setTimeout(r, 12000));
        setRunIAC(false);
        setRunCICD(false);

    },[active]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("starting all animations");
            run_animations();
          }, 20000);
        return () => clearInterval(interval); 
    }
    ,[]);

    return (
        <div className="shadow-xl flex flex-row w-screen" style={{height: '20vh'}}>
            <IAC active={runIAC} />
            <GITOPS active={true} />
            <CICD active={runCICD} />
        </div>
    )
}

export default Header;