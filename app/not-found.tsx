'use client';
 
import Error from 'next/error';
 
const RootNotFound = () => (
  <html lang="en">
    <body>
      <Error statusCode={404} />
    </body>
  </html>
);

export default RootNotFound;
