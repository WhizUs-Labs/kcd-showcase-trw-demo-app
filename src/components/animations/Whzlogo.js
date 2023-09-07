import whzlogo from '../../resources/images/WhizUsLogo.png'
import whztext from '../../resources/images/WhizUsText.png'

import './Whzlogo.css';
import { useRef } from 'react';
import classNames from "classnames";

function Whzlogo({ active,display, className }){
    const logo = useRef();
    const text = useRef();
    let containerclass = classNames('w-100 h-80',className)
    let classes1 = 'static flyin';
    let classes2 = 'static flyin2';
    if (active === true){
        classes1 = classNames(classes1,'');
    }
    return(
        <div className={containerclass}>
            <img href={logo} className={classes1} src={whzlogo} alt="whzlogo" />
            <img href={text} className={classes2} src={whztext} alt="whztxt" />
        </div>
    )
}
export default Whzlogo;