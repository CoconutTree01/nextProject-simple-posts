import Link from 'next/link';
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await response.json();
  return result;
}


export default async function Home() {
  const posts = await fetchData();

  return (
    <div>
      <h1>Hello World</h1>
      {posts.map((post) => (
        <div key={post.id}  className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/post/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}