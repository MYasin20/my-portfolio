
const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] w-full h-screen p-4 flex justify-center items-center pt-32'>
      <form action='https://getform.io/f/4bda524e-208b-4826-a7aa-5faf8669b2ea' method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#edc540] text-gray-300'>Contact</p>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className='text-gray-300 py-4'>// Submit the form below</p>
        </div>
        <input type="hidden" name="_gotcha" style={{ display: 'hidden !important' }} />
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' required />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message' required></textarea>
        <button className='text-white border-2 hover:bg-[#edc540] hover:border-[#edc540] px-4 py-3 my-8 mx-auto flex items-center'>Contact Me</button>
      </form>
    </div>
  )
}

export default Contact