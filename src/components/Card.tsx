import type { FC } from 'react';

interface Props {
  href: string;
  title: string;
  body: string;
}

export const Card: FC<Props> = ({ href, title, body }) => {
  return (
    <li className=' list-none flex p-0.5 bg-gray-900 bg-none rounded-sm drop-shadow'>
      <a href={href}
        className='W-full decoration-none leading-normal text-slate-200 p-2 bg-gray-900 opacity-80 rounded-lg'>
        <h2 className='m-0 text-sm'>
          {title}
          <span>&rarr;</span>
        </h2>
        <p className='mt-2 mb-0'>
          {body}
        </p>
      </a>
    </li>
  );
}