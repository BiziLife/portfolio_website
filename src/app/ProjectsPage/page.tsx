import Navbar from "@/components/navbar";


export default function ProjectPage(): JSX.Element {
  // Example projects data
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "A responsive and visually appealing portfolio website built with React, Tailwind CSS, and DaisyUI.",
      techStack: ["React", "Tailwind CSS", "DaisyUI"],
      link: "https://portfolio-example.com",
      image: "/path/to/portfolio-image.jpg", // Add your image path here
    },
    {
      id: 2,
      title: "Game Development Project",
      description:
        "A 2D platformer game developed using Unity and C# featuring challenging levels and smooth gameplay.",
      techStack: ["Unity", "C#"],
      link: "https://game-example.com",
      image: "/path/to/game-image.jpg", // Add your image path here
    },
    {
      id: 3,
      title: "E-commerce Website",
      description:
        "An e-commerce platform built with Next.js and integrated with Stripe for seamless payment processing.",
      techStack: ["Next.js", "Stripe", "Node.js"],
      link: "https://ecommerce-example.com",
      image: "/path/to/ecommerce-image.jpg", // Add your image path here
    },
  ];

  return (
    <div className="pt-5">
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-5 py-10">
        {/* Projects Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              {/* Project Details */}
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
