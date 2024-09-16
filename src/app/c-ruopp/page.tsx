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
    yearFrom: 1989,
    yearTo: 1994,
    description: "Studium der Zahnmedizin, Albert-Ludwigs Universität Freiburg",
  },
  {
    yearFrom: 1994,
    yearTo: 1994,
    description: "Staatsexamen Zahnmedizin",
  },
  {
    yearFrom: 1995,
    yearTo: 1995,
    description: "Dissertation an der Universität Freiburg ( Prof. Krekeler)",
  },
  {
    yearFrom: 1996,
    yearTo: 1998,
    description: "Assistentin bei Dr. Pahle, Berlin",
  },
  {
    yearFrom: 1998,
    yearTo: 2001,
    description: "Kieferorthopädie-Ausbildung an der Charité Berlin  und in Günzburg",
  },
  {
    yearFrom: 2001,
    yearTo: 2002,
    description: "Fachzahnärztin für Kieferorthopädie  in Berlin bei Dr. Zenker",
  },
  {
    yearFrom: 2002,
    yearTo: 2008,
    description: "Praxispartnerin in der Praxis für Kieferorthopädie,  Dr. Winsauer in Bregenz",
  },
  {
    yearFrom: 2008,
    yearTo: 2010,
    description: "Elternzeit",
  },
  {
    yearFrom: 2010,
    yearTo: 2010,
    description: "Fachzahnärztin für Kieferorthopädie in der Praxis Dr. Damur, Frauenfeld",
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
            <HeroSubsite title="Dr. Claudia Ruopp" />
          </div>
        </div>
        <div className="flex justify-center mb-12 pt-12">
          <div className="container max-w-screen-xl p-4 flex gap-8">
            <div className="w-4/5">
              <h2 className="text-2xl sm:text-4xl font-bold mb-8">Curriculum:</h2>
              <div className="grid grid-cols-12 gap-8 mb-8 w-full">
                <img src="/c-ruopp.png" alt="braces" className="border border-gray-200 col-span-4 object-cover rounded-xl" />
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
