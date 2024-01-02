import Image from "next/image";

export const Hero = () => {
  return (
    <div className="mt-36 mb-96 md:mb-72 flex items-center flex-col md:flex-row">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white md:leading-tight drop-shadow">
          Das Kompetenzzentrum für Kieferorthopädie in der Region
        </h1>
        <p className="text-xl text-white mt-10 drop-shadow">Willkommen in unserer Praxis für Kieferorthopädie</p>
        <div className="p-4 rounded bg-sky-500 mt-10 flex w-fit hover:shadow-xl hover:-translate-y-1 cursor-pointer">
          <p className="text-white text-lg font-bold">Termin buchen</p>
        </div>
      </div>
      {/* <div className="w-full md:w-1/2 relative aspect-square md:h-[600px]">
        <Image src="/hero-picture.svg" alt="hero-picture" fill />
      </div> */}
    </div>
  );
};
