import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="mx-auto max-w-screen-lg">
      {/*I want the navigation bar here*/}
      < Navbar />
      {/*This will be the homepage of our website */}
      <main className=" px-5 bg-white">
        <h1> Projects </h1>
      </main>
    </div>
    
  );
}
