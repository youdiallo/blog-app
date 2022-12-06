import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage;