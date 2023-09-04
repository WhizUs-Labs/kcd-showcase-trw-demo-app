import whzlogo from '../resources/images/logo.png'


function Header(){
    return (
        <div className="fixed top-0 left-0 right-0 bg-white h-16 shadow-xl">
            <img className='m-2 h-12 w-24' src={whzlogo} alt="whzlogo" />
        </div>
    )
}

export default Header;