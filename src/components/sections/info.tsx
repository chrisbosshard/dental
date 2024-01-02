export const Info = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center">
        <div className="w-full mx-4 md:mx-0 md:w-2/3 bg-white p-4 -translate-y-1/2 rounded-xl shadow-xl flex gap-8 flex-col md:flex-row">
          <div className="relative h-full w-full md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 md:pr-4">
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
  );
};
