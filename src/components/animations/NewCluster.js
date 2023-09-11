import kubernetes from '../../resources/images/Kubernetes.png';
import './NewCluster.css';
import classNames from "classnames";

import { BsCloudyFill } from 'react-icons/bs';

function NewCluster({ active,className }){
    let containerclass = classNames('w-40 h-40',className)
    let clusterbuildClass = 'absolute top-28 left-16 w-40 h-16 rounded'
    let clusterimageClass = 'absolute h-8 w-8 top-[5.5rem] left-[2.5rem] opacity-0' 
    if (active === true){
        clusterbuildClass = classNames(clusterbuildClass,'clusterbuild-animaiton');
        clusterimageClass = classNames(clusterimageClass, 'clusterimage-animaiton');
    }
    return(
        <div className={containerclass}>
            <BsCloudyFill className='absolute left-[13.5rem] top-[10.5rem] text-xl scale-[4] text-gray-300' />
            <img className={clusterimageClass} src={kubernetes} alt="CloudServer"/>
            <div className={clusterbuildClass}></div>
            <div className='tasks'>
            </div>
        </div>
    )
}
export default NewCluster;