import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <nav className=''>

      </nav>
       <h1 className='bg-sky-400 text-white'>hello</h1>
       <Link href={'/users'}>Users</Link>
    </main>
  )
}
