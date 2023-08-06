import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="hero" className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center'>
        <p className='text-[#edc540]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'>Muhammad Yasin</h1>
        <h2 className='text-4xl sm:text-7xl text-[#8892b0]'>I&apos;m a Front-End Web Developer.</h2>
        <p className='max-w-[700px] my-4 text-[#8892b0]'>
          I&apos;m an entry-level web developer who love building websites,
          and I&apos;m excited to turn my passion into a successful career in the tech industry.
        </p>

        <div>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className='group border-2 text-white px-6 py-3 my-3 flex items-center hover:bg-[#edc540] hover:border-[#edc540]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Hero