import { useState } from 'react';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../images/newLogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] px-5 flex justify-between items-center bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '90px' }} />
      </div>

      <div>
        <ul className='md:flex hidden h-[30px]'>
          <li className='px-0 mx-4 relative group'>
            <Link className='relative' to="hero" spy={true} smooth={true} duration={500}>
              Home
              <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
          <li className='px-0 mx-4 relative group'>
            <Link className='relative' to="about" spy={true} smooth={true} duration={500}>
              About
              <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
          <li className='px-0 mx-4 relative group'>
            <Link className='relative' to="skills" spy={true} smooth={true} duration={500}>
              Skills
              <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
          <li className='px-0 mx-4 relative group'>
            <Link className='relative' to="work" spy={true} smooth={true} duration={500}>
              Work
              <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
          <li className='px-0 mx-4 relative group'>
            <Link className='relative' to="contact" spy={true} smooth={true} duration={500}>
              Contact
              <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={nav ? 'absolute bg-[#0a192f] top-0 left-0 w-full h-screen flex flex-col justify-center items-center' : 'hidden'}>
        <li className='py-6 text-4xl relative group'>
          <Link className='relative' onClick={handleClick} to="hero" spy={true} smooth={true} duration={500}>
            Home
            <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </li>
        <li className='py-6 text-4xl relative group'>
          <Link className='relative' onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
            About
            <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </li>
        <li className='py-6 text-4xl relative group'>
          <Link className='relative' onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
            Skills
            <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </li>
        <li className='py-6 text-4xl relative group'>
          <Link className='relative' onClick={handleClick} to="work" spy={true} smooth={true} duration={500}>
            Work
            <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </li>
        <li className='py-6 text-4xl relative group'>
          <Link className='relative' onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
            Contact
            <span className='absolute left-0 bottom-[-8px] w-0 h-0.5 bg-[#edc540] transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </li>
      </ul>

      <div className='hidden fixed top-[35%] left-0 lg:flex flex-col'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between w-full items-center text-gray-300'
              href='https://mail.google.com/mail/?view=cm&fs=1&to=myasin.dev22@gmail.com' target='_blank' rel='noreferrer'>
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between w-full items-center text-gray-300'
              href='https://github.com/MYasin20' target='_blank' rel="noreferrer">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#073af2]'>
            <a className='flex justify-between w-full items-center text-gray-300'
              href='/'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar