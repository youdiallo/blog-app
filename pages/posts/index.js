import Head from "next/head";
import { Fragment } from "react";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/posts-utils";

function AllPostsPage(props) {
    return <Fragment>
        <Head>
          <title>All Posts</title>
          <meta 
            name="description" content="A list of all programming related tutorials and posts!"
          />
        </Head>
        <AllPosts posts={props.posts} />
      </Fragment>
}

export default AllPostsPage;

export async function getStaticProps() {

    const posts = getAllPosts();
  
    return {
      props: {
        posts
      }
    }
}