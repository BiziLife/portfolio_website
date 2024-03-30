

export default function Navbar() {
    return (
        <div className="flex items-center justify-between px-5 py-5">
            <a href="/" className="text-5xl"> Tyler Sackel </a>

            <ul className="flex space-x-4">
                <li><a href="/BlogPage"> Blog</a></li>
                <li><a href="/ProjectsPage"> Projects</a></li>
                <li><a href="/ResumePage"> Resume</a></li>
            </ul>
        </div>
    )
}