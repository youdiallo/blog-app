import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(fileidentifier) {

    const postSlug = fileidentifier.replace(/\.md$/, ''); //remove file extension

    const filePath = path.join(postsDirectory, postSlug+'.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData;
}

export function getPostFiles(){
    return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
    const postFiles = getPostFiles();

    const allposts = postFiles.map((postFile) => {
        return getPostData(postFile)
    });
    const sortedPosts = allposts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const futuredPosts = allPosts.filter((post) => post.isFeatured);

    return futuredPosts;
}