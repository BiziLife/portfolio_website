import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Navbar />
      <main className="bg-white p-6 pt-10">
        <section className="text-center">
          <h1 className="text-6xl mt-10 font-bold">Hi, I&apos;m Tyler</h1>
          <div className="flex justify-center mt-6">
            <img src="/Me.png" alt="Tyler's Portrait" className="w-50 h-60 rounded-full object-cover border-4 border-gray-300 "/>
          </div>
          <p className="text-sm font-medium text-gray-500 mt-3">
            Software engineering student at Liberty University
          </p>
        </section>

        <section className="mt-12 text-lg">
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
      <footer className="text-center mt-10 p-4 text-gray-500">
        <p>&copy; 2025 Tyler Sackel. All rights reserved.</p>
      </footer>
    </div>
  );
}