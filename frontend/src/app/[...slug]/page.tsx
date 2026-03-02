import { fetchPageBySlug } from "@/lib/queries";

export default async function Page({ params }) {
    const { slug } = await params;
    const path = slug?.join("/") || "home";
    const data = await fetchPageBySlug(`/${path}/`);
    const page = data?.pageBy;

    if (!page) {
        return <h1>Page not found</h1>;
    }

    return (
        <article>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </article>
    );
}