import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>
        <div>
          <Link href="#about" className="px-4">About</Link>
          <Link href="#projects" className="px-4">Projects</Link>
          <Link href="#contact" className="px-4">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
