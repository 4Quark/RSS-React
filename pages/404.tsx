import Link from 'next/link';
import React from 'react';

export default function Error() {
  return (
    <>
      <h1>Ooops!</h1>
      <p>This page not exist</p>
      <Link href="/">go to Home</Link>
    </>
  );
}
