import Eye from '../../resources/images/eye_icon.png';
import './ReadingEye.css';
import classNames from 'classnames';

function ReadingEye({ active, className}){

    let eyeClass='absolute left-[0.6rem] top-[0.25rem] rounded-full w-[0.4rem] h-[0.4rem] bg-white z-10';
    if (active===true){
        eyeClass=classNames(eyeClass,'read');
    }

    return (
        <div className={className}>
            <img src={Eye} className='absolute left-0 top-0 w-[2rem] h-[1.25rem]' />
            <div className={eyeClass} />
        </div>
    )
}

export default ReadingEye;