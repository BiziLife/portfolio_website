import Navbar from "@/components/navbar";


export default function BlogPage(): JSX.Element {
  // Example blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How I Got Started in Software Engineering",
      excerpt: "A look into my journey from curiosity to programming passion.",
      date: "January 20, 2025",
      link: "/blog/how-i-got-started",
    },
    {
      id: 2,
      title: "How I Learn Discrete Math",
      excerpt: "The most challenge class",
      date: "Febuary 3, 2025",
      link: "/blog/learning-discrete-math",
    }, 
  ];

  return (

    <div className="mx-auto max-w-screen-lg pt-5">
      <Navbar />
      <div className="px-5 py-10">
        {/* Blog Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8 pt-10">My Blog</h1>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-blue-500 hover:text-blue-700 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
