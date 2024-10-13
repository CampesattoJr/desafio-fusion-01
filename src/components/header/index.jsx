import { useState } from 'react'
import { IoIosMenu } from "react-icons/io";

export const Header = () => {
    const [open, setOpen] = useState(false)

    const Links = [
        { name: "Home", link: "/" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Contact", link: "#contact" },
    ]

    return (
        <header className="shadow-md max-w-screen-xl w-full sm:relative fixed">
            <nav className='h-16 sm:flex sm:items-center sm:justify-center bg-black py-4 sm:px-10 px-7'>
                <div className='absolute left-8 top-3 sm:hidden' onClick={() => setOpen(!open)}>
                    <i className='text-5xl text-white cursor-pointer' >
                        <IoIosMenu />
                    </i>
                </div>

                <ul className={'sm:flex sm:items-center sm:gap-4 sm:pb-0 bg-black pb-5 absolute sm:static sm:z-auto z-[-1] w-full left-0 sm:w-auto sm:pl-0 pl-9 transition-all ease-in-out duration-500 ' + (open ? 'top-16' : 'top-[-490px]')}>
                    {
                        Links.map(link => (
                            <li key={link.name} className='sm:ml-8 text-xl cursor-pointer sm:my-0 my-7 sm:hover:scale-110 transition-all ease-in-out duration-500'>
                                <a href={link.link} className='text-white sm:text-[#5c5c5c] sm:hover:text-white transition-all ease-in-out duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}