import { useState,useCallback,useEffect } from 'react';
import Whzlogo from '../components/animations/Whzlogo';
import './LandingPage.css';

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
        <div className="flex justify-center pt-8 w-screen" style={{height: '80vh'}} >
            <Whzlogo active={showAnimation} className={`${showAnimation?"block":"hidden"}`} />
            <h1 className={`text-6xl ${showAnimation?"hidden":"block"}`} >Parameterized Content: {`${process.env.REACT_APP_TEST}`}</h1>
        </div>
    )
}

export default LandingPage;

