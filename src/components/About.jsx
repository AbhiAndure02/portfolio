
import img from '../assets/boy.png';


export default function About() {
  return (
    
               
        <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center ">
         
         <img src= {img} width={230} height={290}  className=' p-1 border-fuchsia-600 img_glow' alt="" />
         
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1 data-aos='fade-right' className="text-[55px] font-semibold mb-8 text-fuchsia-500 uppercase leading-normal">About Me</h1>
        <p data-aos='fade-left'>I am a full stack web developer with a passion for creating interactive and responsive web application. I have experience working with javascript, React, Java , Html, css, Tailwind Css, NodeJs, Express, Mysql, Next js I am always looking to expand my knowledge and skill set,</p>
        <div className="flex mt-8 gap-2 ">
            <div className="flex items-center justify-center ">
                <div data-aos='fade-up' className="flex space-x-2 ">
                   <a href='https://drive.google.com/drive/folders/1zbcdx34zqqfUNuTsnlFnuoDyzS65Nsyp?q=parent:1zbcdx34zqqfUNuTsnlFnuoDyzS65Nsyp' className='neno-button shadow-xl hover:shadow-fuchsia-500 text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-9 rounded-lg py-3 px-7 uppercase relative overflow-hidden'>Resume</a>
                </div>
            </div>
        </div>
        </div>

 

      
    </div>
      
    
  )
}
