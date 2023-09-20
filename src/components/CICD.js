import RevolvingCogs from "./animations/RevolvingCogs";
import WritingCode from "./animations/WritingCode";
import { useState,useCallback,useEffect } from "react";
import classNames from "classnames";
import UpdateAPP from "./animations/UpdateApp";
import VersionControl from "./animations/VersionControl";

import { PiArrowBendRightUpBold,PiArrowBendUpRightBold, PiArrowRightBold} from 'react-icons/pi';


function CICD({ active, className }){
    const CICD_Classes = classNames('overflow-hidden flex flex-col justify-center h-full w-1/3 border border-black',className);
    const [writeCode,setWriteCode] = useState(false);
    const [revolveCogs,setRevolveCogs] = useState(false);
    const [blinkApp,setBlinkApp] = useState(false);
    const [versionControl,setVersionControl] = useState(false);

    const CICD_animation = useCallback(async () => {
        // console.log("starting animation")
        setWriteCode(true);
        await new Promise(r => setTimeout(r, 3000));

        setVersionControl(true)
        await new Promise(r => setTimeout(r, 1500));


        setRevolveCogs(true);
        await new Promise(r => setTimeout(r, 3000));

        setRevolveCogs(false);
        setBlinkApp(true)
        await new Promise(r => setTimeout(r, 3000));
        setRevolveCogs(false);
        setWriteCode(false);
        setBlinkApp(false);
        setVersionControl(false);
    },[active]);

    useEffect(() => {
        if (active === true) {
            CICD_animation();
        }
    }
    ,[active,CICD_animation]);

    return (
        <div className={CICD_Classes} >
            <div className="py-4 w-full block text-center text-4xl">CI/CD</div>
            <div className="flex justify-content grow">
                <div className="relative w-[40rem] mx-auto">

                    <WritingCode active={writeCode} color='border-[#00C6CF] bg-[#00C6CF]' className="absolute bottom-0 left-0 scale-75" />
                    <PiArrowBendRightUpBold className="absolute left-[6.5rem] bottom-20 rotate-45 scale-150" />

                    <VersionControl active={versionControl} color='border-[#00C6CF] bg-[#00C6CF]' className="absolute left-[8.5rem] bottom-20 " />
                    
                    <PiArrowBendUpRightBold className="absolute left-[13.5rem] bottom-36 rotate-[45deg] scale-150" />

                    <RevolvingCogs active={revolveCogs} className="absolute  left-[15rem] bottom-28 rotate-45 scale-75" />
                    
                    <PiArrowRightBold className="absolute left-[21rem] bottom-28 scale-150" />

                    <UpdateAPP active={blinkApp} className="absolute  left-[20rem] bottom-0" />
                </div>
            </div>
        </div>
    )
}

export default CICD;