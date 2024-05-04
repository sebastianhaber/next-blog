import ImageItem from "@/components/image/ImageItem";

export const dynamic = "force-dynamic";
export default async function SearchPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = searchParams?.q;

  if (!searchQuery) return <p>Podaj frazę wyszukiwania</p>;

  let items: ApiResponse[] = searchQuery
    ? await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then((res) => res?.collection.items || [])
    : [];

  return (
    <div className="flex gap-4 flex-wrap items-center justify-center">
      {items.map((item) => (
        <ImageItem item={item} key={item.href} />
      ))}
    </div>
  );
}
