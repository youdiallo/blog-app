import PostGrid from "../posts/post-grid";
import classes from './futured-posts.module.css';

function FuturedPosts(props) {
    return (
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={props.posts} />
        </section>
    );
}

export default FuturedPosts;
