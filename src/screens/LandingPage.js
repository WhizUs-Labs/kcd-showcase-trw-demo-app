import whzlogo from '../resources/images/logo.png';
import './LandingPage.css';

function LandingPage(){
    return (
        <div className="my-40 w-2/3 mx-auto" >
            <h1 className="text-6xl">Hello {`${process.env.REACT_APP_TEST}`}</h1>
            <img className='my-2 mx-6 h-24 w-36' src={whzlogo} alt="whzlogo" />
        </div>
    )
}

export default LandingPage;

