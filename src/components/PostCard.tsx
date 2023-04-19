import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { post: Post };
export default function PostCard({ post: { title, description, date, category, path } }: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <Image className="w-full" src={`/images/posts/${path}.png`} alt={title} width={300} height={200} />
        <div className="flex flex-col items-center p-3">
          <time className="self-end text-gray-400 text-sm">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center text-sm">{description}</p>
          <span className="text-xs rounded-lg bg-lime-200 px-2 my-2">{category}</span>
        </div>
      </article>
    </Link>
  );
}
