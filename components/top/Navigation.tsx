import Link from "next/link";
import Search from "../search/Search";

const Navigation = () => {
  return (
    <div className="min-h-16 w-full bg-stone-900 text-white px-4 flex gap-4 items-center flex-wrap sticky top-0">
      <Link href={"/"} className="p-2 hover:text-gray-200">
        Strona główna
      </Link>
      <Link href={"/about"} className="p-2 hover:text-gray-200">
        O
      </Link>

      <div className="block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Search />
      </div>
    </div>
  );
};

export default Navigation;
