import Link from "next/link";

type Props = {
  image: string;
  name: string;
  link: string;
};

export const StaffImage = (props: Props) => {
  const image = props.image;
  const name = props.name;
  const link = props.link;

  return (
    <Link href={link}>
      <div className="relative overflow-hidden hover:opacity-80 cursor-pointer">
        <img src={image} alt="ch-damur" className="rounded-2xl w-full" />
        <p className="text-center font-bold text-xl text-slate-500 mt-4">{name}</p>
      </div>
    </Link>
  );
};
