import './VersionControl.css';
import gitlab from '../../resources/images/GitLab_Logo.png'
import classNames from 'classnames';

function VersionControl({ active, className, color='border-black bg-black' }){
    let writingCodeClass = 'border-2 border-black h-[4.5rem] w-[3.5rem]';
    writingCodeClass = classNames(writingCodeClass,className);

    const baseClass = 'absolute h-2 w-0 opacity-0  border border-gray-400';
    let write1Class = classNames("left-[0.9rem]", baseClass, 'top-[1.7rem]',color, active?'vcs1':'');
    let write2Class = classNames("left-[0.35rem]",baseClass, 'top-[2.4rem]',color, active?'vcs2':'');
    let write3Class = classNames("left-[0.35rem]",baseClass, 'top-[3.1rem]',color, active?'vcs3':'');
    return(
        <div className={writingCodeClass}>
            <div className='absolute left-[-0.75rem] top-[-1.35rem] h-[1.5rem] w-[1.5rem] p-[0.1rem] rounded-full border border-gray-400 overflow-hidden'>
                <img className='' src={gitlab} alt="VersionControl" />
            </div>
            <div className='absolute h-2 w-[2.5rem] left-[0.35rem] top-[0.3rem] border border-gray-400 bg-gray-200' ></div>
            <div className='absolute h-2 w-[2.5rem] left-[0.35rem] top-[1rem] border border-gray-400 bg-gray-200' ></div>

            <div className='absolute h-2 w-[0.5rem] left-[0.35rem] top-[1.7rem] border border-gray-400 bg-gray-200' ></div>
            <div className={write1Class} ></div>
            <div className={write2Class}></div>
            <div className={write3Class}></div>
        </div>
    )
}
export default VersionControl;