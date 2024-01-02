type Props = {
  image: string;
  name: string;
};

export const StaffImage = (props: Props) => {
  const image = props.image;
  const name = props.name;

  return (
    <div className="relative overflow-hidden hover:opacity-80 cursor-pointer">
      <img src={image} alt="ch-damur" className="rounded-2xl w-full" />
      <p className="text-center font-bold text-xl text-slate-500 mt-4">{name}</p>
    </div>
  );
};
