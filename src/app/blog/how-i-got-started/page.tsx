import Navbar from "@/components/navbar";

export default function ShopNGoProject(): JSX.Element {
  return (
    <div className="mx-auto max-w-screen-lg pt-5">
      <Navbar />
      <div className="px-5 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 pt-10">
          How I Got Started in Software Engineering
        </h1>

        <p>
          When I was about 10 years old, I played Roblox. This platform wasn&apos;t just about playing games—it 
          also allowed players to create their own games. I downloaded Roblox Studio, the software for developing 
          games, and quickly realized I needed to learn a programming language called Lua. I watched many YouTube 
          tutorials on game development and programming, but eventually, I gave up on this passion. 
        </p>
        <br></br>
        <p>
          Fortunately, I had the opportunity to take STEM classes in school, which I enjoyed. I learned how to create basic web 
          pages and made a game in Scratch using block-based coding! My passion for technology stayed with me throughout 
          high school. When choosing a college major, I decided on software engineering because I was excited to develop 
          applications, games, and websites. 
        </p>

      </div>
    </div>
  );
}