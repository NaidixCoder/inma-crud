import { AiOutlineLogout } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavExpanded = ({ Logo, toggleNav }) => {

    return (
        <main className='absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-black'>

            <header className='flex flex-col gap-20'>
                <picture className=''>
                    <img className='max-h-[100px]' src={Logo} alt="Inma" />
                </picture>

                <nav className="">

                    <ul className="flex flex-col gap-4 w-full text-center font-semibold text-black pb-10">
                        <Link to="/productos">
                            <li className='cursor-pointer bg-cyan-500 py-1 rounded-lg hover:text-yellow-300 '>Productos</li>
                        </Link>
                        <li className='cursor-pointer bg-cyan-500 py-1 rounded-lg hover:text-yellow-300 '>Cuenta corriente</li>
                        <li className='cursor-pointer bg-cyan-500 py-1 rounded-lg hover:text-yellow-300 '>Proveedores</li>
                        <li className='cursor-pointer bg-cyan-500 py-1 rounded-lg hover:text-yellow-300 '>Caja</li>
                        <li className='cursor-pointer bg-cyan-500 py-1 rounded-lg hover:text-yellow-300 '>Admin</li>
                    </ul>

                </nav>

                <div className='flex items-center justify-between text-white w-ful'>
                            <IoArrowBack onClick={toggleNav} className='text-4xl text-cyan-400' />
                            <FaUser className='text-cyan-400 text-xl' />
                            <AiOutlineLogout className='text-cyan-400 text-2xl' />                                
                    </div>      
            </header>            

        </main>
    )
}

export default NavExpanded

