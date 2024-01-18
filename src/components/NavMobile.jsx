import { AiFillCalculator } from "react-icons/ai"
import { RiExpandRightLine } from "react-icons/ri"
import { SlMagnifier, SlWallet, SlSettings, SlPeople, SlNotebook  } from "react-icons/sl"
import { Link } from "react-router-dom"

const NavMobile = ({ expandedNav, toggleNav }) => {
    return (
        <div className='flex flex-col  items-center'>
            {!expandedNav && 
                <div className="md:hidden mb-36">
                    <RiExpandRightLine onClick={toggleNav} className="cursor-pointer text-cyan-400 text-[30px]" />
                </div>
            }    

            <nav>
                <ul className="md:hidden flex flex-col gap-10 w-full text-cyan-400 text-2xl">
                <Link to="/productos">
                    <li className='cursor-pointer hover:text-yellow-300 '><SlMagnifier /></li>
                </Link>
                    <li className='cursor-pointer hover:text-yellow-300 '><SlPeople  /></li>
                    <li className='cursor-pointer hover:text-yellow-300 '><SlNotebook  /></li>
                    <li className='cursor-pointer hover:text-yellow-300 '><SlWallet /></li>
                    <li className='cursor-pointer hover:text-yellow-300 '><SlSettings  /></li>
                </ul>               
            </nav>
        </div>
    )
}

export default NavMobile