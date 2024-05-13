import Image from "next/image";
import Navbar from "@/components/navbar.js";

export default function Home() {
  return (
    <div className="">
      {/*I want the navigation bar here*/}
      < Navbar />
      {/*This will be the homepage of our website */}
      <main className="">
        <h1>Homepage</h1>
        <h1> Hello </h1>
      </main>
    </div>
    
  );
}
