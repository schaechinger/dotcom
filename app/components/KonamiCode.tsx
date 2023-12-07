'use client';

import { useEffect, useState } from 'react';

import LinkButton from '@components/LinkButton';
import ArrowRight from '@components/icons/ArrowRight';

const code = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];

const KonamiCode = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (['Shift', 'CapsLock'].includes(e.key)) {
        return;
      }

      if (index < code.length && e.key.toLowerCase() === code[index]) {
        setIndex(index + 1);

        e.preventDefault();
        e.stopImmediatePropagation();
      } else {
        setIndex(0);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [index]);

  return (
    <>
      <p className="mt-10 flex gap-2">
        { 1 > index
          ? <ArrowRight className="mt-0.5 -rotate-90 text-dark-200 dark:text-dark-700" />
          : <span>&#x30b3;</span> }
        { 2 > index
          ? <ArrowRight className="mt-0.5 -rotate-90 text-dark-200 dark:text-dark-700" />
          : <span>&#x30ca;</span> }
        { 3 > index
          ? <ArrowRight className="mt-0.5 rotate-90 text-dark-200 dark:text-dark-700" />
          : <span>&#x30df;</span> }
        { 4 > index
          ? <ArrowRight className="mt-0.5 rotate-90 text-dark-200 dark:text-dark-700" />
          : <span>&#x30b3;</span> }
        { 5 > index
          ? <ArrowRight className="mt-0.5 rotate-180 text-dark-200 dark:text-dark-700" />
          : <span>&#x30de;</span> }
        { 6 > index
          ? <ArrowRight className="mt-0.5 text-dark-200 dark:text-dark-700"/>
          : <span>&#x30f3;</span> }
        { 7 > index
          ? <ArrowRight className="mt-0.5 rotate-180 text-dark-200 dark:text-dark-700" />
          : <span>&#x30c9;</span> }
        { 8 > index
          ? <ArrowRight className="mt-0.5 text-dark-200 dark:text-dark-700" />
          : <ArrowRight className="mt-0.5"/> }
        { 9 > index
          ? <span className="inline-block text-center w-6 h-6 text-dark-200 dark:text-dark-700">B</span>
          : <span className="inline-block text-center w-6 h-6 rounded-full bg-snes-b text-dark-950">B</span> }
        { 10 > index
          ? <span className="inline-block text-center w-6 h-6 text-dark-200 dark:text-dark-700">A</span>
          : <span className="inline-block text-center w-6 h-6 rounded-full bg-snes-a text-dark-50">A</span> }
      </p>

      { 10 <= index
        ? <p className="mt-2">
          <LinkButton
            href={`mailto:manuel@schaechinger.com?subject=Projekt-Anfrage über Homepage [${
              code.map((c, i) => c[index - (i + 1)]).reverse().join('')}]`}
            label="Jetzt durchstarten"
          />
        </p>
        : null }
    </>
  );
};

export default KonamiCode;
