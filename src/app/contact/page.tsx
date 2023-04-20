import ContactForm from '@/components/ContactForm';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact ME</h2>
      <p>gorud0929@naver.com</p>
      <ul className="flex gap-2 my-2">
        {LINKS.map((link, index) => (
          <a href={link.url} key={index} target="_blank" rel="noreferrer" className="text-5xl hover:text-yellow-200">
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an Email</h2>
      <ContactForm />
    </section>
  );
}
