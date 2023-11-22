import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
       <h1 className='p-4 m-4 bg-sky-400 text-white'>hello</h1>
       <Link href={'/users'}>Users</Link>
    </main>
  )
}
