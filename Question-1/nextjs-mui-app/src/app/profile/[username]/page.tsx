export default function ProfilePage({
  params,
}: {
  params: { username: string }
}) {
  return (
    <div>
      <h1>Profile Page: {params.username}</h1>
    </div>
  );
}