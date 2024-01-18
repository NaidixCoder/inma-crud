import { SlMagnifier, SlNotebook, SlPeople, SlSettings, SlWallet } from "react-icons/sl";
import { Link } from "react-router-dom";

const NavPC = () => {
    return (
        <nav className="hidden md:flex md:mt-10 w-full">
            <ul className="md:flex flex-col gap-4 w-full font-semibold text-black text-center">
                <Link to="/productos">
                    <li className=' cursor-pointer px-5 flex bg-cyan-500 py-1 rounded-lg hover:text-yellow-300'>
                        <div className="flex items-center">
                            <SlMagnifier/>
                        </div>
                        <span className="flex flex-grow justify-center">Productos</span>
                    </li>
                </Link>
                <Link to="/cuentacorriente">
                    <li className=' cursor-pointer px-5 flex bg-cyan-500 py-1 rounded-lg hover:text-yellow-300'>
                        <div className="flex items-center">
                            <SlNotebook/>
                        </div>
                        <span className="flex flex-grow justify-center">Cuenta corriente</span>
                    </li>
                </Link>
                <Link to="/proveedores">
                    <li className=' cursor-pointer px-5 flex bg-cyan-500 py-1 rounded-lg hover:text-yellow-300'>
                        <div className="flex items-center">
                            <SlPeople/>
                        </div>
                        <span className="flex flex-grow justify-center">Proveedores</span>
                    </li>
                </Link>
                <Link to="/caja">
                    <li className=' cursor-pointer px-5 flex bg-cyan-500 py-1 rounded-lg hover:text-yellow-300'>
                        <div className="flex items-center">
                            <SlWallet/>
                        </div>
                        <span className="flex flex-grow justify-center">Caja</span>
                    </li>
                </Link>
                <Link to="/admin">
                    <li className=' cursor-pointer px-5 flex bg-cyan-500 py-1 rounded-lg hover:text-yellow-300'>
                        <div className="flex items-center">
                            <SlSettings/>
                        </div>
                        <span className="flex flex-grow justify-center">Admin</span>
                    </li>
                </Link>
            </ul>               
    </nav>
    );
};

export default NavPC;
