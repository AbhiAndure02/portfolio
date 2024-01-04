import { FaGithub, FaInstagram , FaLinkedinIn, FaTwitter} from "react-icons/fa"


const Footer =() =>{
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20 ">
        <div className="container mx-auto grid grid-cols-1 md-grid-cols-4 gap-4 "> 
            <div className="mb-4 md:mb-0 ">
                <span className="text-3xl font-semibold text-fuchsia-600 uppercase">Abhi</span>
                <p className="text-[16px] my-4 ">Turning ideas into reality, one project at a time. It showcases your ability to bring ideas to life and highlights your project management skills.</p>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-fuchsia-600 uppercase">Skiils</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Java System Design</li>
                    <li>Web design</li>
                    <li>database Management</li>
                </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-fuchsia-600 uppercase">Contact</h2>
                    <p>Email : abhiandure123@gmail.com</p>
                    <p>Mobile No: +917558200679</p>
                </div>

                <h2 className="text-xl font-semibold text-fuchsia-600 uppercase">Connects</h2>
                <div className="flex justify-left gap-4" >
                    <a href="https://github.com/AbhiAndure02"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/abhishek-andure-228567228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "> <FaLinkedinIn /> </a>
                    <a href="https://x.com/aa_abhiandure2?t=3EuaXRc7cvLR0y0kdZg7TQ&s=09"><FaTwitter /></a>
                    <a href="https://www.instagram.com/i__am__abhi__/"><FaInstagram /></a>
                </div>
                <div className="mb-0 px-2 flex justify-end">
                    <p className="text-[10px] mb-0">Developer <br></br>Abhishek Andure <br></br> email : abhiaandure123@gmai.com </p>

                   
                </div>
        </div>
    </footer>
  )
}

export default Footer
