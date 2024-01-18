import { AiOutlineLogout } from "react-icons/ai"
import { FaUser } from "react-icons/fa"
import { RiExpandRightLine } from "react-icons/ri"
import { SlMagnifier, SlWallet, SlSettings, SlPeople, SlNotebook  } from "react-icons/sl"
import { Link } from "react-router-dom"

const NavMobile = ({ expandedNav, toggleNav }) => {
    return (
        <div className='flex h-full flex-col justify-between  items-center'>
            {!expandedNav && 
                <div className="lg:hidden">
                    <RiExpandRightLine onClick={toggleNav} className="cursor-pointer text-cyan-400 text-[30px]" />
                </div>
            }    

            <nav>
                <ul className="lg:hidden flex flex-col gap-10 w-full text-cyan-400 text-2xl">
                
                    <Link to="/productos">
                        <li className='cursor-pointer hover:text-yellow-300 '><SlMagnifier /></li>
                    </Link>
                    
                    <Link to="/cuentacorriente">
                        <li className='cursor-pointer hover:text-yellow-300 '><SlPeople  /></li>
                    </Link>
                    
                    <Link to="/proveedores">
                        <li className='cursor-pointer hover:text-yellow-300 '><SlNotebook  /></li>
                    </Link>
                    
                    <Link to="/caja">
                        <li className='cursor-pointer hover:text-yellow-300 '><SlWallet /></li>
                    </Link>
                    
                    <Link to="/admin">
                        <li className='cursor-pointer hover:text-yellow-300 '><SlSettings  /></li>
                    </Link>
                </ul>               
            </nav>
                            {/* FooterMobile */}

                
                <ul className='lg:hidden flex flex-col items-center gap-6'>
                    <li><FaUser className='text-cyan-400 text-xl' /></li>
                    <li><AiOutlineLogout className='text-cyan-400 text-xl' /></li>
                </ul>
        </div>
    )
}

export default NavMobile