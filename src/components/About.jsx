
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="w-full h-full flex flex-col justify-center items-center">

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right pl-4 pb-8">
            <p className="text-4xl inline font-bold border-b-4 border-[#edc540]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="font-bold sm:text-right text-4xl">
            <p>Hi. I&apos;m Muhammad, nice to meet you. Please take a look around</p>
          </div>

          <div>
            <p>
              I am an Information Technology graduate with a passion for web development and have a goal to become a full-stack developer.
              I am eager to contribute my expertise to a dynamic and innovative company that values growth and creativity. With a commitment to delivering high-quality work,
              I strive to continuously improve my skills to excel within the company.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About