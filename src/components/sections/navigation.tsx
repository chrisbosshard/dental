import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";

// Types
type Props = {
  links: { link: string; href: string }[];
};

export const Navigation = (props: Props) => {
  const { links } = props;
  return (
    <div className="w-full h-10 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="relative w-8 h-8 opacity-40">
          <Image src="/dental-braces.svg" alt="Logo" fill />
        </div>
        <p className="text-lg font-bold">Dr. Damur</p>
      </div>
      <div className="hidden md:flex text-sm font-semibold gap-2 ">
        {links.map((link) => (
          <p key={link.link} className="rounded-lg hover:bg-opacity-50 hover:bg-white p-4 cursor-pointer">
            {link.link}
          </p>
        ))}
      </div>
      <div className="flex md:hidden text-sm font-semibold gap-2 ">
        <Bars3Icon className="w-8 h-8" />
      </div>
    </div>
  );
};
