export default function Page({params}: {
    params: { slug: string }
}) {
    return (
        <>
            <h1>Hello this is a blog with the slug of {params.slug}</h1>
        </>
    )
}