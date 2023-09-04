import whzlogo from '../resources/images/logo.png'


function Header(){
    return (
        <div className="fixed top-0 left-0 right-0 bg-white h-32 shadow-xl">
            <img className='my-2 mx-6 h-24 w-36' src={whzlogo} alt="whzlogo" />
        </div>
    )
}

export default Header;