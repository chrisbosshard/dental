import { SectionButton } from "@sections/section-button";
import { StaffImage } from "@sections/staff-image";

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
            <HeroSubsite title="Links" />
          </div>
        </div>
        <div className="flex justify-center mb-12 pt-12">
          <div className="container max-w-screen-xl p-4 flex gap-8">
            <div className="w-4/5">
              <div className="grid grid-cols-12 gap-8 mb-8 w-full">
                <div className="col-span-6 flex flex-col">
                  <div className="p-8 border border-gray-200 rounded-xl">
                    <img src="/link-1.jpg" alt="braces" className="w-full" />
                  </div>
                  <a className="mt-4 text-sky-600 underline hover:text-sky-800" href="http://www.swissortho.ch/">
                    Schweizerische Gesellschaft für Kieferorthopädie
                  </a>
                </div>
                <div className="col-span-6 flex flex-col">
                  <div className="p-8 border border-gray-200 rounded-xl">
                    <img src="/link-2.png" alt="braces" className="w-full" />
                  </div>
                  <a className="mt-4 text-sky-600 underline hover:text-sky-800" href="http://www.sso.ch/">
                    Schweizerische Zahnärzte-Gesellschaft
                  </a>
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
