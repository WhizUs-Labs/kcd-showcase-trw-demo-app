import laptop from '../../resources/images/laptop-icon.png';
import './WritingCode.css';
import classNames from 'classnames';

function WritingCode({ active, className }){
    let writingCodeClass = 'w-28 h-28';
    writingCodeClass = classNames(writingCodeClass,className);

    const baseClass = 'absolute h-2 w-0 opacity-0 left-5 border border-black bg-black';
    let write1Class = classNames(baseClass, 'top-3', active?'write':'');
    let write2Class = classNames(baseClass, 'top-6', active?'write2':'');
    let write3Class = classNames(baseClass, 'top-9', active?'write3':'');
    return(
        <div className={writingCodeClass}>
            <img className='absolute' src={laptop} alt="Cog" />
            <div className={write1Class} ></div>
            <div className={write2Class}></div>
            <div className={write3Class}></div>
        </div>
    )
}
export default WritingCode;