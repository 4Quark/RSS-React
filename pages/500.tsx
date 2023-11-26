import Link from 'next/link';
import React from 'react';

export default function Error() {
  return (
    <>
      <h1>500</h1>
      <p>Something went wrong!</p>
      <Link href="/">go to Home</Link>
    </>
  );
}
