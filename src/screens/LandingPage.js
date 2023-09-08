import Whzlogo from '../components/animations/Whzlogo';
import './LandingPage.css';

function LandingPage(){
    return (
        <div className="flex justify-center pt-8 w-screen" style={{height: '80vh'}} >
            <Whzlogo active={true} />
            {/*<h1 className="text-6xl">Hello {`${process.env.REACT_APP_TEST}`}</h1>*/}
        </div>
    )
}

export default LandingPage;

