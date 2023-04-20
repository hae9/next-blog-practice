import React from 'react';
import MarkdownViewer from '@/components/MarkdownViewer';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;

  return (
    <section className="flex flex-col p-4 gap-2">
      <div className="flex items-center self-end">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-full px-10 border-2 border-gray-400 mt-4 mb-8"></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
