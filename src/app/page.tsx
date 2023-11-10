import Image from "next/image";

// Packages
import { Blob } from "@graphics/blob";
import { Navigation } from "@/components/sections/navigation";

// Data
const links = [
  { link: "Home", href: "/" },
  { link: "Kieferorthopädie", href: "/kieferorthopädie" },
  { link: "Behandlungsteam", href: "/behandlungsteam" },
  { link: "Praxis", href: "/praxis" },
  { link: "Kontakt", href: "/kontakt" },
];

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full bg-gradient-to-tr from-slate-100 to-sky-300 flex justify-center overflow-hidden relative">
        <Blob className="absolute opacity-40" colorStart="#ffffff" colorEnd="#bae6fd" />
        <div className="container z-10 p-6">
          <Navigation links={links} />
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
      <div className="flex justify-center -mt-20 mb-32">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Was ist Kieferorthopädie</h2>
          <p className="w-1/2">
            Die Kieferorthopädie ist ein Spezialgebiet der Zahnmedizin. Sie befasst sich mit der Entstehung, Verhütung und Behandlung von Kiefer- und
            Zahnfehlstellungen.
          </p>
          <br />
          <p className="w-1/2">
            Die Kieferorthopädie hat zum Ziel, Zähne und Kiefer in eine funktionell wie auch ästhetisch optimale Beziehung zu bringen. Diese
            Stellungskorrekturen werden mit kieferorthopädischen Apparaturen (Spangen) erreicht. Welche Art von Spange zur Anwendung kommt, ist vom jeweiligen
            individuellen Problem abhängig. Ziel ist es, mit einem individuell abgestimmten Behandlungsplan und den optimalen Apparaturen möglichst geradlinig
            zu einem ästhetisch wie auch funktionell optimalen Resultat zu gelangen.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="bg-sky-200 p-8 rounded-xl flex gap-4 items-center hover:bg-sky-100 cursor-pointer">
              <div className="relative w-8 h-8 opacity-40">
                <Image src="/dentist-time.svg" alt="Logo" fill />
              </div>
              <p className="text-xl">Die erste Sitzung</p>
            </div>
            <div className="bg-sky-200 p-8 rounded-xl flex gap-4 items-center hover:bg-sky-100 cursor-pointer">
              <div className="relative w-8 h-8 opacity-40">
                <Image src="/dental-filling.svg" alt="Logo" fill />
              </div>
              <p className="text-xl">Behandlungsspektrum</p>
            </div>
            <div className="bg-sky-200 p-8 rounded-xl flex gap-4 items-center hover:bg-sky-100 cursor-pointer">
              <div className="relative w-8 h-8 opacity-40">
                <Image src="/dental-braces.svg" alt="Logo" fill />
              </div>
              <p className="text-xl">unsichtbare Zahnspangen</p>
            </div>
            <div className="bg-sky-200 p-8 rounded-xl flex gap-4 items-center hover:bg-sky-100 cursor-pointer">
              <div className="relative w-8 h-8 opacity-40">
                <Image src="/electric-toothbrush.svg" alt="Logo" fill />
              </div>
              <p className="text-xl">Kosten</p>
            </div>
            <div className="bg-sky-200 p-8 rounded-xl flex gap-4 items-center hover:bg-sky-100 cursor-pointer">
              <div className="relative w-8 h-8 opacity-40">
                <Image src="/dental-mirror.svg" alt="Logo" fill />
              </div>
              <p className="text-xl">Links</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Behandlungsteam</h2>
          <div className="grid grid-cols-4 gap-32 mt-12">
            <div className="bg-sky-200 p-8 aspect-square rounded-full relative overflow-hidden hover:opacity-80 cursor-pointer">
              <Image src="/ch-damur.jpg" alt="ch-damur" fill />
            </div>
            <div className="bg-sky-200 p-8 aspect-square rounded-full relative overflow-hidden hover:opacity-80 cursor-pointer">
              <Image src="/c-ruopp.jpg" alt="ch-damur" fill />
            </div>
            <div className="bg-sky-200 p-8 aspect-square rounded-full relative overflow-hidden hover:opacity-80 cursor-pointer">
              <Image src="/s-tektas.jpg" alt="ch-damur" fill />
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 gap-32 mt-4 mb-32">
            <div className="text-center font-bold text-xl text-slate-500">
              <p>Dr. Christoph Damur</p>
            </div>
            <div className="text-center font-bold text-xl text-slate-500">
              <p>Dr. Claudia Ruopp</p>
            </div>
            <div className="text-center font-bold text-xl text-slate-500">
              <p>Dr. Sibel Tektas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
