import VersionControl from "./animations/VersionControl";
import WritingCode from "./animations/WritingCode";
import { useState,useCallback,useEffect } from "react";
import classNames from "classnames";
import NewCluster from "./animations/NewCluster";

import { PiArrowBendRightUpBold,PiArrowBendUpRightBold } from 'react-icons/pi';


function IAC({ active, className }){
    
    const IAC_Classes = classNames('overflow-hidden flex flex-col justify-center h-full w-1/3 border border-black',className);
    const [writeCode,setWriteCode] = useState(false);
    const [showVSC,setshowVSC] = useState(false);
    const [buildCluster,setbuildCluster] = useState(false);
    
    const IaC_animation = useCallback(async () => {
        // console.log("starting animation")
        setWriteCode(true);
        await new Promise(r => setTimeout(r, 3000));
        setbuildCluster(true)
        await new Promise(r => setTimeout(r, 5000));
        setshowVSC(true);
        await new Promise(r => setTimeout(r, 6000));
        setshowVSC(false);
        setWriteCode(false);
        setbuildCluster(false);
    },[active]);

    useEffect(() => {
        if (active === true) {
            IaC_animation();
        }
    }
    ,[active,IaC_animation]);

    return (
        <div className={IAC_Classes} >
            <div className="w-full py-4 block text-center text-4xl">IaC</div>
            <div className="flex justify-content grow">
                <div className="relative inset-x-1/4">
                        <VersionControl active={showVSC} color='border-[#00C6CF] bg-[#00C6CF]' className={`absolute ${showVSC ? "flex" : "hidden"} bottom-16 left-0 scale-1`} />
                        <PiArrowBendUpRightBold className={`absolute ${showVSC ? "flex" : "hidden"} bottom-[5rem] left-24 rotate-[225deg] scale-150`} />

                        <WritingCode active={writeCode} color='border-[#00C6CF] bg-[#00C6CF]' className="absolute bottom-[1.5rem] left-32 scale-75" />
                        
                        <PiArrowBendRightUpBold className={`absolute bottom-[5rem] left-64 ${buildCluster ? "flex" : "hidden"} rotate-45 scale-150`} />
                        <NewCluster active={buildCluster} className={`absolute bottom-[3.5rem] left-60 ${buildCluster ? "flex" : "hidden"} scale-75`} />
                        
                </div>
            </div>
        </div>
    )
}

export default IAC;