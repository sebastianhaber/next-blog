import Search from "@/components/search/Search";
import Image from "next/image";

export const dynamic = "force-dynamic";
export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchQuery = searchParams?.search;
  let items: ApiResponse[] = searchQuery
    ? await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then((res) => res?.collection.items || [])
    : [];
  console.log(items);

  if (!searchQuery) return <Search />;
  return (
    <div>
      <Search />
      {items.map(
        (item) =>
          item.links?.length && (
            <Image
              key={item.href}
              alt={"xd"}
              src={item.links[0].href}
              width={300}
              height={300}
            />
          )
      )}
    </div>
  );
}
