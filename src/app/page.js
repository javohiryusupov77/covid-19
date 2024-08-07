import LineChart from "./components/data";
import Country from "./components/fetchCountries";
import Dates from "./components/fetchDates";
import Image from "next/image";

export default function Home() {

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-6 gap-4 p-4">
      <div className="col-span-2">
        <Country  />
      </div>
      <div className="col-span-2 flex flex-col items-center">
        <Image src="/worldmap.webp" alt="worldmap" width={600} height={300} className="mb-4" />
        <LineChart />
      </div>
      <div className="col-span-2">
        <Dates />
      </div>
    </div>
  );
}
