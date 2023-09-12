import kubernetes from '../../resources/images/Kubernetes.png';
import './NewApp.css';
import classNames from "classnames";

import { BsCloudyFill } from 'react-icons/bs';

function UpdateAPP({ active,className }){
    let containerclass = classNames('w-40 h-40',className)
    let blinkClass = 'opacity-0'
    let baseClass = 'absolute w-8 h-8 border border-[#00C6CF] rounded opacity-0';
    let appClass1 = classNames(baseClass,'top-[8rem] left-[5rem]');
    let appClass2 = classNames(baseClass,'top-[8rem] left-[8rem] ');
    let appClass3 = classNames(baseClass,'top-[8rem] left-[11rem] ');
    if (active === true){
        appClass1 = classNames(appClass1,'createapp');
        appClass2 = classNames(appClass2,'createapp2');
        appClass3 = classNames(appClass3,'createapp3');
    }
    return(
        <div className={containerclass}>
            <BsCloudyFill className='absolute left-[13.5rem] top-[10.5rem] text-xl scale-[3] text-gray-300' />
            <img className='absolute h-8 w-8 top-[5.5rem] left-[2.5rem]' src={kubernetes} alt="CloudServer" />
            <div className='absolute top-28 left-16 w-40 h-16 border-2 border-black rounded'></div>
            <div className='tasks'>
                <div className={appClass1}></div>
                <div className={appClass2}></div>
                <div className={appClass3}></div>
            </div>

        </div>
    )
}
export default UpdateAPP;