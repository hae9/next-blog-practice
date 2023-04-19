import Image from 'next/image';
import React from 'react';
import profileImage from '../../public/images/profile.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center">
      <Image className="h-56 w-56 rounded-full mx-auto" src={profileImage} alt="profile" priority />
      <h2 className="text-2xl font-bold mt-2">{`Hi, I am hae9 👋`}</h2>
      <h3 className="font-bold mb-2">프론트엔드 개발자</h3>
      <Link href="/contact">
        <button className="bg-yellow-100 font-bold rounded-xl px-3 mb-10">Contact Me</button>
      </Link>
    </section>
  );
}
