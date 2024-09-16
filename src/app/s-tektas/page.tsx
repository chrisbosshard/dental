import { SectionButton } from "@sections/section-button";
import { StaffImage } from "@sections/staff-image";
import Image from "next/image";

// Packages
import { MainNav } from "@sections/main-nav";
import { HeroSubsite } from "@sections/hero-subsite";
import { InfoSmall } from "@sections/info-small";
import { mainConfig } from "@lib/config/main";
import { Contact } from "@sections/contact";

// Data
const links = [
  { link: "Home", href: "/" },
  { link: "Kieferorthopädie", href: "/kieferorthopädie" },
  { link: "Behandlungsteam", href: "/behandlungsteam" },
  { link: "Praxis", href: "/praxis" },
  { link: "Kontakt", href: "/kontakt" },
];

const curriculum = [
  {
    yearFrom: 2008,
    yearTo: 2014,
    description: "Studium der Zahnmedizin, Universität Zürich",
  },
  {
    yearFrom: 2014,
    yearTo: 2014,
    description: "Staatsexamen Zahnmedizin",
  },
  {
    yearFrom: 2017,
    yearTo: 2017,
    description: "Dissertation an der Universität Zürich",
  },
  {
    yearFrom: 2015,
    yearTo: 2017,
    description: "Assistenz-Zahnärztin bei Dr. Laux, Andelfingen",
  },
  {
    yearFrom: 2017,
    yearTo: 2020,
    description: "Kieferorthopädie-Ausbildung an der Universität Zürich",
  },
  {
    yearFrom: 2020,
    yearTo: 2020,
    description: "Kieferorthopädin  in der Praxis Dr. Damur, Frauenfeld",
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-between h-screen">
      <div>
        <div className="w-full bg-gradient-to-tr from-slate-100 to-sky-300 flex justify-center items-start overflow-hidden relative">
          <img src="/clinic_background.jpeg" alt="clinic background" className="absolute opacity-50 h-full w-full object-cover top-0" />
          <div className="from-sky-300 to-transparent bg-gradient-to-t w-full h-full absolute opacity-100 backdrop-blur-sm" />
          <div className="w-full max-w-screen-xl z-10 p-4">
            <MainNav items={mainConfig.mainNav} />
            <HeroSubsite title="Dr. Sibel Tektas" />
          </div>
        </div>
        <div className="flex justify-center mb-12 pt-12">
          <div className="container max-w-screen-xl p-4 flex gap-8">
            <div className="w-4/5">
              <h2 className="text-2xl sm:text-4xl font-bold mb-8">Curriculum:</h2>
              <div className="grid grid-cols-12 gap-8 mb-8 w-full">
                <img src="/s-tektas.png" alt="braces" className="border border-gray-200 col-span-4 object-cover rounded-xl" />
                <div className="col-span-8">
                  {curriculum.map((item, index) => {
                    const year = item.yearFrom === item.yearTo ? item.yearFrom : `${item.yearFrom} - ${item.yearTo}`;
                    return (
                      <div key={index} className="border-b-slate-300 border-b py-4 first:pt-0">
                        <strong>{year + ":"}</strong> {item.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <InfoSmall />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
