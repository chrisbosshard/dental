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

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-between h-screen">
      <div>
        <div className="w-full bg-gradient-to-tr from-slate-100 to-sky-300 flex justify-center items-start overflow-hidden relative">
          <img src="/clinic_background.jpeg" alt="clinic background" className="absolute opacity-50 h-full w-full object-cover top-0" />
          <div className="from-sky-300 to-transparent bg-gradient-to-t w-full h-full absolute opacity-100 backdrop-blur-sm" />
          <div className="w-full max-w-screen-xl z-10 p-4">
            <MainNav items={mainConfig.mainNav} />
            <HeroSubsite title="Unsichtbare Zahnspange" />
          </div>
        </div>
        <div className="flex justify-center mb-12 pt-12">
          <div className="container max-w-screen-xl p-4 flex gap-8">
            <div className="w-4/5">
              <div className="grid grid-cols-12 gap-8 mb-8 w-full">
                <img src="/lingual.jpg" alt="braces" className="border border-gray-200 col-span-3 object-cover aspect-square rounded-xl" />
                <div className="col-span-9">
                  <h2 className="text-2xl sm:text-2xl font-bold mt-0 leading-5 mb-4">Innen geklebte Zahnspangen (Lingualtechnik)</h2>
                  <p>Bei kieferorthopädischer Behandlung von erwachsenen Patienten wird die feste Zahnspange oftmals innen (lingual) geklebt.</p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-8 mb-8 w-full">
                <img src="/invisalign.jpeg" alt="braces" className="border border-gray-200 col-span-3 object-cover aspect-square rounded-xl" />
                <div className="col-span-9">
                  <h2 className="text-2xl sm:text-2xl font-bold mt-0 leading-5 mb-4">Invisalign</h2>
                  <p>
                    Invisalign und andere Schienentherapien bieten die Möglichkeit, kleinere Fehlstellungen der Zähne mittels unsichtbaren Schienen zu
                    therapieren.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-8 mb-8 w-full">
                <img src="/zahnfarben.jpg" alt="braces" className="border col-span-3 border-gray-200 object-cover aspect-square rounded-xl" />
                <div className="col-span-9">
                  <h2 className="text-2xl sm:text-2xl font-bold mt-0 leading-5 mb-4">Zahnfarbene Brackets</h2>
                  <p>
                    Die aussen angebrachte Zahnspange kann durch zahnfarbene Brackets ästhetischer gestaltet werden. Hier der Vergleich von Metall vs. Keramik
                  </p>
                </div>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-8 mt-20">Wichtige Infos zu den Korrektur-Schienen</h2>
              <div className="grid grid-cols-12 gap-8 mb-8 w-full">
                <div className="relative border border-gray-200 w-full col-span-3 aspect-square rounded-xl">
                  <Image src="/schiene.png" alt="braces" fill />
                </div>
                <div className="col-span-9">
                  <h2 className="text-2xl sm:text-2xl font-bold mt-0 leading-5 mb-4">Tragezeit</h2>
                  <p className="mb-8">
                    Zur Erzielung der Behandlung sollen die Schienen 24 Std. getragen werden. Bitte die Schienen nur zum Essen und Trinken (heisse, zucker- und
                    säurehaltige oder färbende Getränke) herausnehmen. Jede Schiene soll mindestens 7-10 Tage getragen werden. Erst danach wird zur nächsten
                    Schiene gewechselt.
                  </p>
                  <h2 className="text-2xl sm:text-2xl font-bold mt-0 leading-5 mb-4">Reinigung</h2>
                  <p className="mb-8">
                    Grundsätzlich sollten Sie die Zähne putzen bevor Sie die Schiene einsetzen. Die Schiene bitte nur mit einer Zahnbürste und kaltem Wasser
                    reinigen.
                  </p>
                  <h2 className="text-2xl sm:text-2xl font-bold mt-0 leading-5 mb-4">Sonstiges</h2>
                  <p>Bei Verlust, Beschädigung oder schlechter Passung - bitte direkt einen Kontrolltermin in unserer Praxis vereinbaren!</p>
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
