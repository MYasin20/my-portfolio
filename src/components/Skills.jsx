import HTML from '/src/images/html.png';
import CSS from '/src/images/css.png';
import JAVASCRIPT from '/src/images/javascript.png';
import REACTJS from '/src/images/react.png';
import TAILWIND from '/src/images/tailwindcss.svg';
import BOOTSTRAP from '/src/images/Bootstrap_logo.svg';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center">
        <div>
          <p className='text-4xl border-b-4 border-[#edc540] inline'>Skills</p>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <p className='my-4'>// These are the technologies I&apos;ve worked with</p>
        </div>

        <div className='w-full grid gap-5 grid-cols-2 sm:grid-cols-4 text-center py-8'>
          <div className='py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='mt-4'>CSS</p>
          </div>
          <div className='py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JAVASCRIPT} alt='JAVASCRIPT icon' />
            <p className='mt-4'>JAVASCRIPT</p>
          </div>
          <div className='py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={REACTJS} alt='REACTJS icon' />
            <p className='mt-4'>REACTJS</p>
          </div>
          <div className='py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TAILWIND} alt='TAILWIND icon' />
            <p className='mt-4'>TAILWIND</p>
          </div>
          <div className='py-3 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={BOOTSTRAP} alt='BOOTSTRAP icon' />
            <p className='mt-4'>BOOTSTRAP</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills