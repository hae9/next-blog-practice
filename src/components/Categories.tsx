import React from 'react';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-right p-4">
      <h2 className="text-lg font-bold mb-3">Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-teal-500 ${category === selected && 'text-teal-500 font-bold'}`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
