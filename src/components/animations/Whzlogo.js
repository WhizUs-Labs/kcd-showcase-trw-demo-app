import whzlogo from '../../resources/images/WhizUsLogo.png'
import whztext from '../../resources/images/WhizUsText.png'

import './Whzlogo.css';
import { useRef } from 'react';
import classNames from "classnames";

function Whzlogo({ active,display, className }){
    const logo = useRef();
    const text = useRef();
    let containerclass = classNames('',className)
    let classes1 = '';
    let classes2 = '';
    if (active === true){
        classes1 = classNames(classes1,'flyin');
        classes2 = classNames(classes2,'flyin2');
    } else {
        classes1 = classNames(classes1,'hidden');
        classes2 = classNames(classes2,'hidden');
    }
    return(
        <div className={containerclass}>
            <img href={logo} className={classes1} src={whzlogo} alt="whzlogo" />
            <img href={text} className={classes2} src={whztext} alt="whztxt" />
        </div>
    )
}
export default Whzlogo;