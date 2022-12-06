
import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FuturedPosts from '../components/home-page/futured-posts';

export default function HomePage() {
  return (
    <Fragment >
      <Hero />
      <FuturedPosts />
    </Fragment>
  )
}
