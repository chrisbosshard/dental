import { SectionButton } from "@sections/section-button";
import { StaffImage } from "@sections/staff-image";

// Packages
import { MainNav } from "@sections/main-nav";
import { Hero } from "@sections/hero";
import { Info } from "@sections/info";
import { mainConfig } from "@lib/config/main";

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
      <div className="w-full bg-gradient-to-tr from-slate-100 to-sky-300 flex justify-center items-start overflow-hidden relative">
        <img src="/clinic_background.jpeg" alt="clinic background" className="absolute opacity-50 h-full w-full object-cover top-0" />
        <div className="from-sky-300 to-transparent bg-gradient-to-t w-full h-full absolute opacity-100 backdrop-blur-sm" />
        <div className="max-w-screen-xl z-10 p-4">
          <MainNav items={mainConfig.mainNav} />
          <Hero />
        </div>
      </div>
      <Info />
      <div className="flex justify-center -mt-48 sm:-mt-20 mb-12">
        <div className="container max-w-screen-xl p-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Was ist Kieferorthopädie</h2>
          <p className="lg:w-1/2 text-sm sm:text-base">
            Die Kieferorthopädie ist ein Spezialgebiet der Zahnmedizin. Sie befasst sich mit der Entstehung, Verhütung und Behandlung von Kiefer- und
            Zahnfehlstellungen.
          </p>
          <br />
          <p className="lg:w-1/2 text-sm sm:text-base">
            Die Kieferorthopädie hat zum Ziel, Zähne und Kiefer in eine funktionell wie auch ästhetisch optimale Beziehung zu bringen. Diese
            Stellungskorrekturen werden mit kieferorthopädischen Apparaturen (Spangen) erreicht. Welche Art von Spange zur Anwendung kommt, ist vom jeweiligen
            individuellen Problem abhängig. Ziel ist es, mit einem individuell abgestimmten Behandlungsplan und den optimalen Apparaturen möglichst geradlinig
            zu einem ästhetisch wie auch funktionell optimalen Resultat zu gelangen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-12">
            <SectionButton image="/dentist-time.svg" title="Die erste Sitzung" />
            <SectionButton image="/dental-braces.svg" title="Behandlungsspektrum" />
            <SectionButton image="/dental-invisible.svg" title="Unsichtbare Zahnspangen" />
            <SectionButton image="/cost.svg" title="Kosten" />
            <SectionButton image="/dental-mirror.svg" title="Links" />
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:mt-0 mb-20">
        <div className="container max-w-screen-xl p-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Behandlungsteam</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <StaffImage image="/ch-damur.png" name="Dr. Christoph Damur" />
            <StaffImage image="/c-ruopp.png" name="Dr. Claudia Ruopp" />
            <StaffImage image="/s-tektas.png" name="Dr. Sibel Tektas" />
          </div>
        </div>
      </div>
    </div>
  );
}
