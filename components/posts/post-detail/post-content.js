import ReactMarkdown from 'react-markdown';

import PostHeader from "./post-header";
import classes from './post-content.module.css';

const DUMMY_POST = {
    title: 'Getting Started With NexJS', 
    image: 'getting-started-nextjs.png', 
    slug: 'getting-started-with-nextjs', 
    date: '2022-02-23', 
    content: '# This is a first post'
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath}/>
        <ReactMarkdown>
            {DUMMY_POST.content}
        </ReactMarkdown>
    </article>
}

export default PostContent;