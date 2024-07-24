import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

const Project = () => {
  const projects = [
    {
      img: img1,
      title: 'Fashion design shoping',
      description: 'Ecommarce Website'
    },
    {
      img: img2,
      title: 'Banking System',
      description: 'Manage the banking Transaction .'
    },
    {
      img: img3,
      title: 'Ipl analysis ',
      description: 'IPL analysis of last 10 year'
    },
    {
      img: img4,
      title: 'Vehicle detection using Haar cascade algorithm',
      description: 'detecting the vehicle using the haar cascade algorithm  '
    }
  ];

  return (
    <div id="Project" className="p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-10 rounded">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-3xl h-auto w-60 border-2 border-fuchsia-800 shadow-lg overflow-hidden">
            <img className="w-full h-36 object-cover" src={project.img} alt={project.title} />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-fuchsia-700">{project.title}</h2>
              <p className="text-gray-700 mt-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
