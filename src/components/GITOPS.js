import VersionControl from "./animations/VersionControl";
import ReadingEye from "./animations/ReadingEye";
import { BsExclamationLg } from 'react-icons/bs';
import NewApp from './animations/NewApp';

import { useState,useCallback,useEffect } from "react";
import classNames from "classnames";

import { PiArrowRightBold } from 'react-icons/pi';


function GITOPS({ active, className }){
    
    const GITOPS_Classes = classNames('overflow-hidden flex flex-col justify-center h-full w-1/3 border border-black',className);
    const [showVSC,setshowVSC] = useState(false);
    const [readAnimation,setReadAnimation] = useState(false);
    const [showExclam,setShowExclam] = useState(false);
    const [createApp,setCreateApp] = useState(false);
    

    const GITOPS_animation = useCallback(async () => {
        // console.log("starting animation")
        setshowVSC(true);
        await new Promise(r => setTimeout(r, 3000));
        setReadAnimation(true);
        await new Promise(r => setTimeout(r, 3000));
        setShowExclam(true);
        await new Promise(r => setTimeout(r, 500));
        setCreateApp(true);
        await new Promise(r => setTimeout(r, 10000));
        setshowVSC(false);
        setReadAnimation(false);
        setShowExclam(false);
        setCreateApp(false);
    },[active]);

    useEffect(() => {
        if (active === true) {
            GITOPS_animation();
        }
    }
    ,[active,GITOPS_animation]);
    
    return (
        <div className={GITOPS_Classes} >
            <div className="w-full py-4 block text-center text-4xl">GitOps</div>
            <div className="flex justify-content grow">
                <div className="relative inset-x-1/4">
                    <VersionControl active={showVSC} className="absolute bottom-16 left-0" color='border-[#00C6CF] bg-[#00C6CF]' />
                    <ReadingEye active={readAnimation} className="absolute bottom-8 left-20 w-20 h-20" />
                    <BsExclamationLg className={`absolute ${showExclam?'flex':'hidden'} text-5xl bottom-20 left-24`} />

                    <PiArrowRightBold className={`absolute left-40 bottom-24 ${createApp?'flex':'hidden'} scale-150`} />
                    <NewApp active={createApp} className="absolute left-40 bottom-20" />
                </div>
            </div>
        </div>
    )
}

export default GITOPS;