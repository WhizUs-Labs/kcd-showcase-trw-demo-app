import { useState,useCallback,useEffect } from 'react';
import Whzlogo from '../components/animations/Whzlogo';
import './LandingPage.css';
import whztext from '../resources/images/WhizUsText.png'
import whzlogo from '../resources/images/WhizUsLogo.png'

function LandingPage(){
    const [showAnimation,setShowAnimation] = useState(false);

    const run_animation = useCallback(async () => {
        setShowAnimation(true);
        await new Promise(r => setTimeout(r, 10000));
        setShowAnimation(false);
    },[]);

    useEffect(() => {
        
        run_animation();
        const interval = setInterval(() => {
            console.log("starting Whzanim");
            run_animation();
        }, 60000);

        return () => clearInterval(interval); 
        
    }
    ,[]);

    return (
        <div className="flex justify-center w-screen" style={{height: '80vh'}} >
            <Whzlogo active={showAnimation} className={`${showAnimation?"block":"hidden"}`} />
            <div className={`KCDTheme w-screen flex flex-col text-center justify-center ${showAnimation?"hidden":"flex"}`} >
                <div><img className="w-[40vw] my-20 inline-block" src={whztext} alt="whztxt" /></div>
                <h1 className={`text-6xl uppercase my-20 animatedtext`} >KCD Demo</h1>
                <h1 className={`text-6xl uppercase my-20 animatedtext`} >Project: {`${process.env.REACT_APP_PROJECTNAME}`}</h1>
                <h1 className={`text-6xl uppercase my-20 animatedtext2`} >Owner: {`${process.env.REACT_APP_PROJECTNAME}`}</h1>
            </div>
        </div>
    )
}

export default LandingPage;

