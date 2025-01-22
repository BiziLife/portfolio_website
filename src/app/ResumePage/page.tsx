import Navbar from "@/components/navbar";


export default function ResumePage(): JSX.Element {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Navbar /> 
      <div className="px-5 py-10">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">My Resume</h1>
        
        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <p className="text-gray-700">
            I am a highly motivated software engineering student with a passion
            for creating innovative projects using cutting-edge technologies.
            Skilled in web development, programming, and problem-solving, I
            continuously seek to deepen my knowledge and apply it to real-world
            challenges.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-2 rounded-full">
              JavaScript
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-2 rounded-full">
              React
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-2 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-2 rounded-full">
              Python
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-2 rounded-full">
              C++
            </span>
            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-2 rounded-full">
              Git & GitHub
            </span>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-lg font-bold">Liberty University</h3>
            <p className="text-gray-700">Bachelor of Science in Software Engineering</p>
            <p className="text-gray-500">Expected Graduation: May 2027</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>

          <div className="mb-6">
            <h3 className="text-lg font-bold">Team Lead, Engineering Computer Services</h3>
            <p className="text-gray-500">Liberty University | Aug 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Managed a team of computer engineering students on technical projects.</li>
              <li>Provided troubleshooting support for software and hardware issues.</li>
              <li>Led system upgrades and deployment efforts across multiple departments.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Freelance Web Developer</h3>
            <p className="text-gray-500">Self-Employed | Jan 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Developed responsive websites using React, Tailwind CSS, and Next.js.</li>
              <li>Collaborated with clients to design user-friendly interfaces.</li>
              <li>Optimized website performance, ensuring fast load times and accessibility.</li>
            </ul>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Working on...</li>
          </ul>
        </section>

        {/* Download Button */}
        <div className="text-center mb-10">
          <a href="/path/to/resume.txt" className="btn btn-primary px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"> Download Resume </a>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-10">
          <p>© 2025 Tyler Sackel. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}
