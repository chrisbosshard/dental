import Image from "next/image";

export default function SectionWhatIs() {
  return (
    <div className="flex justify-center -mt-20 mb-32">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4">Was ist Kieferorthopädie</h2>
        <p className="w-1/2">
          Die Kieferorthopädie ist ein Spezialgebiet der Zahnmedizin. Sie befasst sich mit der Entstehung, Verhütung und Behandlung von Kiefer- und
          Zahnfehlstellungen.
        </p>
        <br />
        <p className="w-1/2">
          Die Kieferorthopädie hat zum Ziel, Zähne und Kiefer in eine funktionell wie auch ästhetisch optimale Beziehung zu bringen. Diese Stellungskorrekturen
          werden mit kieferorthopädischen Apparaturen (Spangen) erreicht. Welche Art von Spange zur Anwendung kommt, ist vom jeweiligen individuellen Problem
          abhängig. Ziel ist es, mit einem individuell abgestimmten Behandlungsplan und den optimalen Apparaturen möglichst geradlinig zu einem ästhetisch wie
          auch funktionell optimalen Resultat zu gelangen.
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
  );
}
