
import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FuturedPosts from '../components/home-page/futured-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started With NexJS', 
    image: 'getting-started-nextjs.png', 
    slug: 'getting-started-with-nextjs', 
    date: '2022-02-23', 
    excerpt: 'NextJS is the react framework for production - it makes building fullstack React app easier with SSR.'
  },
  {
    title: 'Getting Started With NexJS', 
    image: 'getting-started-nextjs.png', 
    slug: 'getting-started-with-nextjs1', 
    date: '2022-02-23', 
    excerpt: 'NextJS is the react framework for production - it makes building fullstack React app easier with SSR.'
  },
  {
    title: 'Getting Started With NexJS', 
    image: 'getting-started-nextjs.png', 
    slug: 'getting-started-with-nextjs2', 
    date: '2022-02-23', 
    excerpt: 'NextJS is the react framework for production - it makes building fullstack React app easier with SSR.'
  },
  {
    title: 'Getting Started With NexJS', 
    image: 'getting-started-nextjs.png', 
    slug: 'getting-started-with-nextjs3', 
    date: '2022-02-23', 
    excerpt: 'NextJS is the react framework for production - it makes building fullstack React app easier with SSR.'
  }
];

export default function HomePage() {
  return (
    <Fragment >
      <Hero />
      <FuturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )
}
