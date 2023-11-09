import Image from "next/image";

// Packages
import { Blob } from "@graphics/blob";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full bg-gradient-to-tr from-slate-100 to-sky-300 flex justify-center overflow-hidden relative">
        <Blob className="absolute opacity-40" colorStart="#ffffff" colorEnd="#bae6fd" />
        <div className="container z-10 p-6">
          <div className="w-full h-10 flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <div className="relative w-8 h-8 opacity-40">
                <Image src="/dental-braces.svg" alt="Logo" fill />
              </div>
              <p className="text-lg font-bold">Dr. Damur</p>
            </div>
            <div className="flex gap-8 text-sm font-semibold">
              <p>Home</p>
              <p>Kieferorthopädie</p>
              <p>Behandlungsteam</p>
              <p>Praxis</p>
              <p>Kontakt</p>
            </div>
          </div>
          <div className="mt-32 mb-72 flex items-center">
            <div className="w-2/5">
              <h1 className="text-5xl font-bold text-slate-800 leading-tight">Das Kompetenzzentrum für Kieferorthopädie in der Region</h1>
              <p className="text-xl mt-10">Willkommen in unserer Praxis für Kieferorthopädie</p>
              <div className="p-4 rounded bg-sky-500 mt-10 flex w-fit hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <p className="text-white text-md font-bold">Kontaktieren Sie uns</p>
              </div>
            </div>
            <div className="w-3/5 relative h-[600px]">
              <Image src="/hero-picture.svg" alt="hero-picture" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container flex justify-center">
          <div className="w-2/3 bg-white p-4 -translate-y-1/2 rounded-xl shadow-xl flex gap-8 ">
            <div className="relative h-full w-2/3 border-r-2 border-gray-100 pr-4">
              <img src="/map.jpeg" alt="map" />
            </div>
            <div className="text-sm">
              <p className="font-bold text-lg mb-4">So finden Sie uns</p>
              <p>Zürcherstrasse 177, 8500 Frauenfeld</p>
              <p>Tel: 052 722 20 20</p>
              <p className="">
                email:{" "}
                <a href="mailto:praxis.damur@bluewin.ch" className="text-sky-700 hover:text-sky-900 hover:underline">
                  praxis.damur@bluewin.ch
                </a>
              </p>
              <br />
              <p> Die Praxis ist mitten in der Altstadt von Frauenfeld.</p>
              <p>2 Kundenparkplätze sind an der Grabenstrasse für Sie reserviert.</p>
              <br />
              <p>Wir sind Montag bis Freitag</p>
              <p>von 8:00 bis 11:30 und 14:00 bis 17:00</p>
              <p>telefonisch erreichbar. 052 722 20 20</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-28 mb-32">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Die erste Sitzung</h2>
          <p className="w-1/2">
            In der ersten Sitzung erhalten Sie nach einem Untersuch Informationen über die fehlerhafte Zahn- und Kieferstellung sowie eine Beratung über
            mögliche Therapien. Folgendes können Sie erwarten:
          </p>
        </div>
      </div>
    </div>
  );
}
