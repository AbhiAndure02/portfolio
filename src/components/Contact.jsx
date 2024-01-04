import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact =() =>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ozrwum', 'template_kcuyyrb', e.target, 'LAwdJuutldcBgf7gU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 ">Contacts</h1>
      <form action="" onSubmit={sendEmail} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
            <input name = "name" className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-600 text-xl text-white bg-glow" placeholder="Enter your name" type="text" />
            <input name="email" className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-600 bg-glow text-xl text-white" placeholder="Enter your Email" type="email" />

        </div>
        <textarea name = "message" className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-600 bg-glow text-xl text-white" placeholder="Write your Message..." id="" cols="30" rows="10"></textarea>
        <button className='neno-button shadow-xl hover:shadow-fuchsia-500 text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800/50 my-4 rounded-lg py-3 px-5 uppercase relative overflow-hidden' type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Contact
