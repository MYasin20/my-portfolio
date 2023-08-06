import SpaceTourism from '../images/space-tourism-SS.png';
import TeslaClone from '../images/tesla-SS.png';
import PassGenerator from '../images/pass-SS.png';
import Blogr from '../images/Bolgr-SS.png';
import Sunny from '../images/sunnyside-SS.png';
import CCard from '../images/creditcard-SS.png';
import FlagAPI from '../images/flag-SS.png';
import TODOLIST from '../images/todolistSS.png';


const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-[#edc540] inline text-gray-300">Work</p>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <p className="py-6">// Checkout some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div style={{ backgroundImage: `url(${SpaceTourism})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Space Tourism (React)
              </span>

              <div className='pt-8 text-center'>
                <a href="https://frabjous-valkyrie-b917e8.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/Space-Tourism-Website" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div style={{ backgroundImage: `url(${TeslaClone})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Tesla Clone Website (React + Styled Components)
              </span>

              <div className='pt-8 text-center'>
                <a href="https://myasin20.github.io/tesla-clone-vite/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/tesla-clone-vite" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div style={{ backgroundImage: `url(${FlagAPI})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Flag Countries API (React + Tailwind)
              </span>

              <div className='pt-8 text-center'>
                <a href="https://thunderous-stroopwafel-1bfd1b.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/Flag-Finder-API" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div style={{ backgroundImage: `url(${PassGenerator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Password Generator (HTML, CSS, JS)
              </span>

              <div className='pt-8 text-center'>
                <a href="https://myasin20.github.io/password-generator-app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/password-generator-app" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div style={{ backgroundImage: `url(${TODOLIST})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                CRUD TodoList App
              </span>

              <div className='pt-8 text-center'>
                <a href="https://sunny-dasik-f09006.netlify.app/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/Todo-List-App" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div style={{ backgroundImage: `url(${Blogr})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Blogr Landing Page (HTML, CSS, JS)
              </span>

              <div className='pt-8 text-center'>
                <a href="https://myasin20.github.io/bolgr-landing-page/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/bolgr-landing-page" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div style={{ backgroundImage: `url(${Sunny})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Sunny Page (HTML, CSS, JS, Bootstrap)
              </span>

              <div className='pt-8 text-center'>
                <a href="https://myasin20.github.io/sunnyside-landing-page/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/sunnyside-landing-page" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

          <div style={{ backgroundImage: `url(${CCard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Credit Card Page (HTML, CSS, JS)
              </span>

              <div className='pt-8 text-center'>
                <a href="https://myasin20.github.io/interactive-card-details-form/" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href="https://github.com/MYasin20/interactive-card-details-form" target='_blank' rel='noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Work