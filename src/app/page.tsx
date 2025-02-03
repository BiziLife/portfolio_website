import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/Button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-lg min-h-screen flex flex-col">
      <Navbar />
      <main className="p-6 pt-10 flex-grow">
        <section className="text-center">
          <h1 className="text-6xl mt-10 font-extrabold text-gray-800 animate-fade-in">
            Hi, I&apos;m Tyler
          </h1>
          <div className="flex justify-center mt-6">
            <img
              src="/Me.png"
              alt="Tyler's Portrait"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-300 shadow-lg hover:scale-105 transform transition duration-300"
            />
          </div>
          <p className="text-md font-medium text-gray-500 mt-3">
            Software Engineering Student at Liberty University
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-red-600 hover:text-red-800 transition duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </section>

        <section className="mt-12 text-lg leading-relaxed text-gray-700">
          <p className="mt-5">
            I am a software engineering student at Liberty University with a
            passion for creating innovative projects using code, such as video
            games and websites.
          </p>
          <p className="mt-5">
            Since my teenage years, I&apos;ve been curious about how games are
            made, which sparked my journey into the world of programming.
          </p>
          <p className="mt-5">
            This curiosity has driven me to pursue an education at an amazing
            college, where I continue to deepen my knowledge and skills in
            software development.
          </p>
          <p className="mt-5">
            In addition to my studies, I work as a team lead for the engineering
            computer services.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center mt-10 p-4 text-gray-500 border-t border-gray-200">
        <p>&copy; 2025 Tyler Sackel. All rights reserved.</p>
      </footer>
    </div>
  );
}
