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
            <HeroSubsite
              title="Die erste Sitzung"
              subtitle="In der ersten Sitzung erhalten Sie nach einem Untersuch Informationen über die fehlerhafte Zahn- und Kieferstellung sowie eine Beratung über mögliche
          Therapien."
            />
          </div>
        </div>
        <div className="flex justify-center mb-12 pt-12">
          <div className="container max-w-screen-xl p-4 flex gap-8">
            <div className="w-8/12">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold mb-8">Folgendes können Sie erwarten:</h2>
                <ol className="list-decimal ml-4 mb-8">
                  <li className="mb-2">Ausführliche Schilderung der Problematik</li>
                  <li className="mb-2">Informationen über die Behandlungsnotwendigkeit. Was geschieht, wenn man nichts macht?</li>
                  <li className="mb-2">Beschreibung der notwendigen Zahnspangen</li>
                  <li className="mb-2">Ungefähre Kostenschätzung</li>
                  <li className="mb-2">Ungefährer Zeitplan</li>
                </ol>
                <p className="mb-4">
                  Die erste Sitzung soll Ihnen helfen zu entscheiden, ob Sie eine kieferorthopädische Behandlung machen lassen wollen oder nicht.{" "}
                </p>
                <p className="mb-4">
                  Falls Sie sich zu einer Behandlung entschliessen, werden genaue Dokumente über die Zahnstellung und den Gesichtsaufbau erstellt. Diese
                  Planungsunterlagen dienen einer genauen Problemanalyse mit Diagnose, aus welcher sich dann der Behandlungsplan ergibt.
                </p>
                <p className="mb-4">
                  In einer Besprechung wird Ihnen die Problematik anhand der Planungsunterlagen nochmals genau erklärt sowie der Behandlungsplan geschildert.
                  Sie erhalten in dieser Sitzung auch eine schriftliche Kostenschätzung für die vorgesehene Behandlung.
                </p>
              </div>
            </div>
            <div className="w-4/12">
              <InfoSmall />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
