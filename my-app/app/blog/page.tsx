const Blog = async () => {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <div>
      {" "}
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};

export default Blog;
