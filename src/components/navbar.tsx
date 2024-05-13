
export default function Navbar(): JSX.Element {
    
    return (
        <>
            <div id="navbar" className="sticky top-0 z-10 flex items-center bg-white justify-between px-5 py-5 border-b-2 border-gray-300">
                <a href="/" className="text-2xl loos-condensed-font">Tyler Sackel</a>

                <ul className="flex space-x-4 text-base">
                    <li><a href="/BlogPage" className="hover:text-green-500 hover:font-bold">Blog</a></li>
                    <li><a href="/ProjectsPage" className="hover:text-green-500 hover:font-bold"> Projects</a></li>
                    <li><a href="/ResumePage" className="hover:text-green-500 hover:font-bold"> Resume</a></li>
                </ul>
            </div>
        </>
    );
}