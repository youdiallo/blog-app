import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helper/posts-utils";

function SinglePostPage(props) {
    return <Fragment>
        <Head>
            <title>{props.post.title}</title>
            <meta name="description" content={props.post.excerpt}/>
        </Head>
        <PostContent post={props.post}/>
    </Fragment> 
}

export default SinglePostPage;

export async function getStaticProps(context) {
    const { slug } = context.params;
    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export async function getStaticPaths() {

    const postFilesNames = getPostFiles();
    const slugs = postFilesNames.map((fileName) => fileName.replace(/\.md$/, '')); //remove file extension);
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}