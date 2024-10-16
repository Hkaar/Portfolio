export default function Page({ params }: {
  params: { slug: string };
}) {
  return (
    <>
      <h1>Hello this is a subpage with the slug of {params.slug}</h1>
    </>
  );
}
