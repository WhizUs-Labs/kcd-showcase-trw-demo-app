import RevolvingCogs from "./animations/RevolvingCogs";
import WritingCode from "./animations/WritingCode";
import { useState,useCallback,useEffect } from "react";
import classNames from "classnames";
import NewAPP from "./animations/NewApp";

import { PiArrowBendRightUpBold,PiArrowBendUpRightBold } from 'react-icons/pi';


function IAC({ active, className }){
    
    const IAC_Classes = classNames('h-full w-1/3 border border-black rounded',className);
    const [writeCode,setWriteCode] = useState(false);
    const [revolveCogs,setRevolveCogs] = useState(false);
    /*
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
    */
    return (
        <div className={IAC_Classes} >
            <div className="relative w-full py-4 block text-center">IaC</div>

        </div>
    )
}

export default IAC;