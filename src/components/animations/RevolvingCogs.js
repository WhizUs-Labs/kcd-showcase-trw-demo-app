import cog from '../../resources/images/Cog.png';
import './RevolvingCogs.css';
import { useRef } from 'react';
import classNames from "classnames";

function RevolvingCogs({ active,className }){
    const cog1 = useRef();
    const cog2 = useRef();
    let containerclass = classNames('w-16 h-16',className)
    let classes1 = 'absolute left-14';
    let classes2 = 'absolute rotate-[22deg]';
    if (active === true){
        classes1 = classNames(classes1,'spin');
        classes2 = classNames(classes2,'reverse-spin');
    }
    return(
        <div className={containerclass}>
            <img href={cog1} className={classes1} src={cog} alt="Cog" />
            <img href={cog2} className={classes2} src={cog} alt="Cog2" />
        </div>
    )
}
export default RevolvingCogs;