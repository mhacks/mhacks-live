'use client';

import { useEffect, useRef } from 'react';

export default function ConsolePrint() {

  const rendered = useRef<boolean>(false);

  useEffect(() => {
    if (!rendered.current) {
      console.log(
        `
        
 ____ ____ ____ ____ ____ ____ ________ ____ ____
||M |||H |||a |||c |||k |||s |||      |||1 |||6 ||
||__|||__|||__|||__|||__|||__|||______|||__|||__||
|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/______\\|/__\\|/__\\|

Proudly brought to you by The MHacks 16 Team.

        `
      );
      rendered.current = true;
    }
  }, []);

  return <></>;
}
