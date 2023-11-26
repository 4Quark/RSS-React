import Image from 'next/image';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Image
          src={'/RMLogo.png'}
          width={260}
          height={80}
          className="RMLogo"
          alt="Rick and Morty"
        />
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/search/1">Search</Link>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
