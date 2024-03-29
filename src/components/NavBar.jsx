import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/inmaCrud.png'

// Icons
import { FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

// Componentes
import NavPC from './NavPc';
import NavMobile from './NavMobile';
import NavExpanded from './NavExpanded';


const NavBar = () => {
    
    const [expandedNav, setExpandedNav] = useState(false);

    const toggleNav = () => {
        setExpandedNav(!expandedNav);
    }

    return (
        <>

        <aside className='h-dvh w-12 lg:w-[300px] lg:m-w-[300px] md:px-6 py-10 px-1 bg-black flex flex-col flex-shrink-0 items-center justify-between'>


            <div className='h-full flex flex-col justify-center items-center'>
                <picture className='hidden lg:flex'>
                    <img className='' src={Logo} alt="Inma" />
                </picture>

                {/* Carga el nav conntrolado por clases tailwind*/}
                <NavPC />
                <NavMobile expandedNav={expandedNav} toggleNav={toggleNav} /> 
            </div>

            {/* FooterPC */}
            <footer className='w-full'>

                <ul className='hidden lg:flex flex-col gap-3'>
                    <li className='text-white flex gap-2 items-center'><FaUser className='text-cyan-400 text-xl' />Mi cuenta </li>
                    <li className='text-white flex gap-2 items-center'><AiOutlineLogout className='text-cyan-400 text-xl' />Salir </li>
                </ul>

            </footer>

            {/* NavExpnanded */}

            {expandedNav &&
            <NavExpanded toggleNav={toggleNav} Logo={Logo} />
            }
            
        </aside>

        </>
    )
}

export default NavBar