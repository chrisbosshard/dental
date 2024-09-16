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
            <HeroSubsite title="Kosten" />
          </div>
        </div>
        <div className="flex justify-center mb-12 pt-12">
          <div className="container max-w-screen-xl p-4 flex gap-8">
            <div className="w-4/5">
              <p className="mb-4">
                Bei schwerwiegenden Zahn- und Kieferfehlstellungen werden die Kosten der Behandlung durch die Invalidenversicherung bez. durch die
                Grundversicherung der Krankenkasse gedeckt.
              </p>
              <p>
                Bei weniger gravierenden Fehlstellungen sind die Kosten durch die Patienten/Patientinnen, bzw. durch deren Eltern zu tragen. Die meisten Kinder-
                und Jugendlichen verfügen heute über eine Zahnzusatzversicherung, welche sich je nach Versicherungsmodell mit 50% oder mehr an den Kosten der
                Behandlung beteiligt. Solche Zusatzversicherungen sollten schon im Vorkindergartenalter abgeschlossen werden.{" "}
              </p>
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
