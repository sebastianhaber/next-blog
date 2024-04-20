"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

const Search = () => {
  const router = useRouter();
  const search = useSearchParams();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // router.push(`/?query=${formData.get("query")}`);
    const query = formData.get("query");
    if (query) router.replace(`/?search=${query}`);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        className="placeholder:text-black text-red-500"
        defaultValue={search.get("search") || undefined}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Search;
