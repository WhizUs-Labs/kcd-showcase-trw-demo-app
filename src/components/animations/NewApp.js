import cloud from '../../resources/images/Cloud.png';
import './NewApp.css';
import { useRef } from 'react';
import classNames from "classnames";

function NewAPP({ active,className }){
    const newAppRef = useRef();
    let containerclass = classNames('w-64 h-64',className)

    let cloudClass = 'absolute h-72 w-96 left-4';
    let blinkClass = 'opacity-0'
    if (active === true){
        blinkClass = classNames(blinkClass,'blinkanim');
    }
    return(
        <div className={containerclass}>
            <img href={newAppRef} className={cloudClass} src={cloud} alt="CloudServer" />
            <div className='absolute top-28 left-16 w-40 h-16 border-2 border-black rounded'></div>
            <div className='tasks'>
                <div className='absolute top-[8rem] left-[5rem] w-8 h-8 border border-black rounded'></div>
                <div className='absolute top-[8rem] left-[8rem] w-8 h-8 border border-black rounded'></div>
                <div className='absolute top-[8rem] left-[11rem] w-8 h-8 border border-black rounded'></div>
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
export default NewAPP;