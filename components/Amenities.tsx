import Img1 from "@/assets/Group 133.png";
import Img2 from "@/assets/Group 134.png";
import Img3 from "@/assets/Group 135.png";
import Img4 from "@/assets/Group 136.png";
import Image from "next/image";

export const Amenities = () => {
  return (
    <>
      <div className=" flex flex-col  flex-wrap">
        <div className="text-main py-10 items-center flex flex-col">
          <h1 className="text-3xl">HARBOUR </h1>
          <h1 className="text-3xl">LIGHT</h1>
          <p>de GRISOGONO</p>
          <p className="text-xs">GENEVE</p>
        </div>

        <div className="flex flex-col flex-wrap items-center">
          <h1 className="text-main font-bold text-4xl">Features & Amenities</h1>
          <p className="md:mx-96 text-md font-normal text-md text-center py-6">
            Harbour Lights beautifully honours maritime voyages while embracing
            an opulent seafront lifestyle. Its maritime-inspired amenities
            provide an unmatched seaside experience, offering a life of
            tranquility and bliss.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:gap-16  text-main font-bold">
        <div className="items-center flex flex-col p-2 border-1 shadow-md rounded-3xl">
          <Image src={Img1} alt="Swimming pool" />
          <h3>Floating </h3>
          <h3>Pools</h3>
        </div>
        <div className="items-center flex flex-col p-2 border-1 shadow-md rounded-3xl">
          <Image src={Img2} alt="Swimming pool" />
          <h3>Spacious Cabins </h3>
          <h3>Like Rooms</h3>
        </div>
        <div className="items-center flex flex-col p-2 border-1 shadow-md rounded-3xl">
          <Image src={Img3} alt="Swimming pool" />
          <h3>Sea Facing </h3>
          <h3>Swimming Pools</h3>
        </div>
        <div className="items-center flex flex-col p-2 border-1 shadow-md rounded-3xl">
          <Image src={Img4} alt="Swimming pool" />
          <h3>Gymnasium </h3>
          <h3>& Fitness</h3>
        </div>
      </div>
      <div className="flex items-end justify-end py-10 md:px-60 px-10 flex-col">
        <p className="text-xs ">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. Source 1 | Source 2
        </p>

        <div className="flex justify-end flex-row flex-wrap my-8">
          <button className="text-white px-8 py-3 font-bold border-2  border-main bg-main rounded-lg m-2">
            EXTERIORS
          </button>
          <button className="text-main px-8 py-3 font-bold border-2  border-main rounded-lg m-2">
            INTERIORS
          </button>
        </div>
      </div>
    </>
  );
};
