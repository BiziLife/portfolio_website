import Navbar from "@/components/navbar";

export default function Blog2(): JSX.Element {
  return (
    <div className="mx-auto max-w-screen-lg pt-5">
      <Navbar />
      <div className="px-5 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 pt-10">
          Blog 2
        </h1>
      </div>
    </div>
  );
}