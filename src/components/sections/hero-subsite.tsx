import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
};

export const HeroSubsite = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <div className="w-full mt-36 mb-12 flex items-center flex-col md:flex-row">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white md:leading-tight drop-shadow">{title}</h1>
        {subtitle && <p className="text-xl text-white mt-10 drop-shadow">{subtitle}</p>}
      </div>
    </div>
  );
};
