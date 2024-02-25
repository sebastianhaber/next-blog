import Link from "next/link";

const Navigation = () => {
  return (
    <div className="h-11 w-full bg-stone-900 px-4 flex gap-4 items-center">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>ABout</Link>
    </div>
  );
};

export default Navigation;
