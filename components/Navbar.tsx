import Link from 'next/link'


export default function Navbar(){
return (
<header className="bg-white shadow-sm">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<Link href="/" className="font-bold">Sachin</Link>
<nav className="flex gap-4">
<Link href="/projects">Projects</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
</nav>
</div>
</header>
)
}