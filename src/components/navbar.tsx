
export default function Navbar(): JSX.Element {
    
    return (
        <>
            <div id="navbar" className="sticky top-0 z-10 flex items-center justify-between px-5 py-5">
                <a href="/" className="text-5xl">Tyler Sackel</a>

                <ul className="flex space-x-4">
                    <li><a href="/BlogPage">Blog</a></li>
                    <li><a href="/ProjectsPage">Projects</a></li>
                    <li><a href="/ResumePage">Resume</a></li>
                </ul>
            </div>
        </>
    );
}