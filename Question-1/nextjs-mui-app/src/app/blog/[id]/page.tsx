export default function BlogPost({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div>
      <h1>Blog Post ID: {params.id}</h1>
    </div>
  );
}