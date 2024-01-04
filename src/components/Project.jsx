import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
const Project =() =>{
    return(
        <div id="Project" className="p-20 flex flex-col items-center justify-center ">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 ">Projects</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-20 rounded">
                <img className="text-[27px] flex items-center justify-center rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow " src={img1} alt="" />
                <img className="text-[27px] flex items-center justify-center rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow " src={img2} alt="" />
                <img className="text-[27px] flex items-center justify-center rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow " src={img3} alt="" />
                <img className="text-[27px] flex items-center justify-center rounded-3xl h-36 w-48 border-2 border-fuchsia-800 b-glow " src={img4} alt="" />
            </div>
        </div>

    );

}
export default Project;