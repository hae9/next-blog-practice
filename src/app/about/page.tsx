import Hero from '@/components/Hero';
import React from 'react';

const TITLE_CLASS = 'text-2xl font-bold';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-9 m-8 text-center">
        <h2 className={TITLE_CLASS}>WHO AM I ?</h2>
        <p>강해경</p>

        <h2 className={TITLE_CLASS}>Career</h2>
        <p></p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>자스, 리액트, 넥스트</p>
      </section>
    </>
  );
}
