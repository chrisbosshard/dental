import Image from "next/image";
import { Blob } from "@graphics/blob";

type Props = {
  image: string;
  title: string;
};

export const SectionButton = (props: Props) => {
  const image = props.image;
  const title = props.title;

  return (
    <div className="bg-sky-200 p-8 rounded-xl flex gap-4 items-center hover:bg-sky-100 cursor-pointer">
      <div className="relative flex flex-shrink-0 w-8 h-8 sm:w-16 sm:h-16 opacity-40">
        <Image src={image} alt="Logo" fill />
      </div>
      <p className="md:text-lg xl:text-xl">{title}</p>
    </div>
  );
};
