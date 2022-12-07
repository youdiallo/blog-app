import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/posts-utils";

function AllPostsPage(props) {
    return <AllPosts posts={props.posts} />
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