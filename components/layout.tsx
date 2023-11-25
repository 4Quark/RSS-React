import RMLogo from './../assets/RMLogo.png';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Layout({ children }) {
  return (
    <>
      <header>
        <Image
          src={RMLogo}
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
      {children}
    </>
  );
}

export default Layout;
