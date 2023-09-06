import RevolvingCogs from "./animations/RevolvingCogs";
import WritingCode from "./animations/WritingCode";
import { useState,useCallback,useEffect } from "react";
import classNames from "classnames";

import { PiArrowBendRightUpBold,PiArrowBendUpRightBold } from 'react-icons/pi';


function CICD({ active, className }){
    const CICD_Classes = classNames('relative h-60 w-60',className);
    const [writeCode,setWriteCode] = useState(false);
    const [revolveCogs,setRevolveCogs] = useState(false);
    const CICD_animation = useCallback(async () => {
        console.log("starting animation")
        setWriteCode(true);
        await new Promise(r => setTimeout(r, 3000));
        setWriteCode(false);
        console.log("starting cogs")
        setRevolveCogs(true);
        await new Promise(r => setTimeout(r, 3000));
        console.log("stopping cogs")
        setRevolveCogs(false);

        await new Promise(r => setTimeout(r, 3000));
        setRevolveCogs(false);
        setWriteCode(false);
    },[active]);

    useEffect(() => {
        if (active === true) {
            CICD_animation();
        }
    }
    ,[active,CICD_animation]);

    return (
        <div className={CICD_Classes} >
            <div className="relative py-4 block text-center">CI/CD</div>
            <WritingCode active={writeCode} className="absolute bottom-0 left-0 scale-75" />
            <PiArrowBendRightUpBold className="absolute bottom-24 left-28 rotate-45 scale-150" />
            <RevolvingCogs active={revolveCogs} className="absolute bottom-28 left-32 rotate-45 scale-75" />
            <PiArrowBendUpRightBold className="absolute bottom-36 left-56 rotate-[45deg] scale-150" />
            
        </div>
    )
}

export default CICD;