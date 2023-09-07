import Whzlogo from '../components/animations/Whzlogo';
import './LandingPage.css';

function LandingPage(){
    return (
        <div className="my-40 w-2/3 mx-auto" >
            <Whzlogo active={true} />
            <h1 className="text-6xl">Hello {`${process.env.REACT_APP_TEST}`}</h1>
        </div>
    )
}

export default LandingPage;

