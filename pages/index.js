
import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FuturedPosts from '../components/home-page/futured-posts';
import { getFeaturedPosts } from '../helper/posts-utils';

export default function HomePage(props) {
  return (
    <Fragment >
      <Hero />
      <FuturedPosts posts={props.posts}/>
    </Fragment>
  )
}

export async function getStaticProps() {

  const futuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: futuredPosts
    }
  }
}
