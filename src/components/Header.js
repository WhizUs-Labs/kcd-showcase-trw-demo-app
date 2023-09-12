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
        //console.log("starting IAC");
        setRunIAC(true);
        await new Promise(r => setTimeout(r, 14000));
        //console.log("starting GitOps");
        setRunGitOps(true);
        await new Promise(r => setTimeout(r, 14000));
        //console.log("starting CICD");
        setRunCICD(true);
        await new Promise(r => setTimeout(r, 12000));
        //console.log("stopping Animations");
        setRunIAC(false);
        setRunCICD(false);
        setRunGitOps(false);

    },[active]);

    useEffect(() => {
        run_animations();
        const interval = setInterval(() => {
            console.log("starting all animations");
            run_animations();
          }, 40000);
        return () => clearInterval(interval); 
    }
    ,[]);

    return (
        <div className="shadow-xl flex flex-row w-screen" style={{height: '20vh'}}>
            <IAC active={runIAC} />
            <GITOPS active={runGitOps} />
            <CICD active={runCICD} />
        </div>
    )
}

export default Header;