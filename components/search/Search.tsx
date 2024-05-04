"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useRef } from "react";

const Search = () => {
  const router = useRouter();
  const search = useSearchParams();

  const inputRef = useRef<HTMLInputElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // router.push(`/?query=${formData.get("query")}`);
    const query = formData.get("query");
    if (query) router.replace(`/search?q=${query}`);
  }
  const handleClear = () => {
    router.replace(`/`);
  };

  useEffect(() => {
    if (!inputRef.current) return;
    const query = search.get("q");
    inputRef.current.value = query || "";
  }, [search]);

  return (
    <form onSubmit={onSubmit} className="relative flex gap-4">
      <button
        type="submit"
        className="h-9 w-9 rounded-l-md bg-white text-black grid place-content-center absolute -left-9 top-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
      <input
        type="text"
        name="query"
        className="placeholder:text-black text-black rounded-r-md p-1 h-9 w-[20rem]"
        placeholder="Szukaj"
        ref={inputRef}
      />

      {search.get("q") && (
        <button
          onClick={handleClear}
          type="button"
          className="h-9 px-2 py-1 rounded-md bg-gray-700 grid place-content-center "
        >
          X Wyczyść
        </button>
      )}
    </form>
  );
};

export default Search;
