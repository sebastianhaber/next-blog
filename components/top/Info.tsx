type Props = {
  title: string;
  content: string;
};

const Info = ({ content, title }: Props) => {
  return (
    <div className="flex flex-col bg-fuchsia-500 text-white h-[70px] w-full max-w-[1200px] mx-auto">
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default Info;
