import kubernetes from '../../resources/images/Kubernetes.png';
import './UpdateAPP.css';
import classNames from "classnames";

import { BsCloudyFill } from 'react-icons/bs';

function UpdateAPP({ active,className }){
    let containerclass = classNames('w-64 h-64',className)
    let blinkClass = 'opacity-0'
    let bgColor = '';
    if (active === true){
        blinkClass = classNames(blinkClass,'blinkanim');
        bgColor = 'bg-[#00C6CF]';
    }
    return(
        <div className={containerclass}>
            <img className='absolute h-8 w-8 top-[5.5rem] left-[2.5rem]' src={kubernetes} alt="CloudServer" />
            <BsCloudyFill className='absolute left-[13.5rem] top-[10.5rem] text-xl scale-[3] text-gray-300' />
            <div className='absolute top-28 left-16 w-40 h-16 border-2 border-black rounded'></div>
            <div className='tasks'>
                <div className='absolute top-[8rem] left-[5rem] w-8 h-8 border border-black rounded'></div>
                <div className='absolute top-[8rem] left-[8rem] w-8 h-8 border border-black rounded'></div>
                <div className={classNames('absolute top-[8rem] left-[11rem] w-8 h-8 border border-black rounded ease-in duration-300',bgColor)}></div>

                <div className={blinkClass}>
                    <div className='absolute top-[7.75rem] left-[10.5rem]  w-2 h-0 border border-[#00C6CF] rotate-45'></div>
                    <div className='absolute top-[7.5rem] left-[11.75rem]  w-2 h-0 border border-[#00C6CF] rotate-90'></div>
                    <div className='absolute top-[7.75rem] left-[13rem]  w-2 h-0 border border-[#00C6CF] rotate-[135deg]'></div>
                    <div className='absolute top-[9rem] left-[10.25rem]  w-2 h-0 border border-[#00C6CF] rotate-180'></div>
                    <div className='absolute top-[9rem] left-[13.25rem]  w-2 h-0 border border-[#00C6CF] rotate-180'></div>
                    <div className='absolute top-[10.25rem] left-[10.5rem]  w-2 h-0 border border-[#00C6CF] rotate-[135deg]'></div>
                    <div className='absolute top-[10.5rem] left-[11.75rem]  w-2 h-0 border border-[#00C6CF] rotate-90'></div>
                    <div className='absolute top-[10.25rem] left-[13rem]  w-2 h-0 border border-[#00C6CF] rotate-45'></div>

                </div>
            </div>

        </div>
    )
}
export default UpdateAPP;