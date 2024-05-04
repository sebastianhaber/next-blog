import Image from "next/image";
import Link from "next/link";

type Props = {
  item: ApiResponse;
};

const ImageItem = ({ item }: Props) => {
  if (!item.links?.length) return null;
  return (
    <Link href={item.links[0].href} target="_blank">
      <Image
        key={item.href}
        alt={"xd"}
        src={item.links[0].href}
        width={300}
        height={300}
        className="rounded-md aspect-square object-cover"
      />
    </Link>
  );
};

export default ImageItem;
