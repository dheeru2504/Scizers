import Img1 from "@/assets/Group 132.png";
import Img2 from "@/assets/Group.png";
import Img3 from "@/assets/Group 16.png";
import Img4 from "@/assets/Group 40.png";
import Image from "next/image";
export const Features = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F4F9FF" }}>
        <div className="py-10 flex gap-40 justify-center flex-wrap">
          <div className="flex justify-center flex-col items-center">
            <Image src={Img1} alt="log" />
            <span className=" text-main">BOOK WITH</span>
            <h1 className="text-main text-2xl font-bold">ONLY 10%</h1>
          </div>

          <div className="flex justify-center flex-col items-center">
            <Image src={Img2} alt="log" />
            <span className="text-main">PAYMENT PLAN</span>
            <h1 className="text-main text-2xl font-bold">EASY 70/60</h1>
          </div>

          <div className="flex justify-center hidden md:inline  flex-col items-center">
            <Image src={Img3} alt="log" />
            <span className="text-main">HANDOVER ON</span>
            <h1 className="text-main text-2xl font-bold">Q2 2027</h1>
          </div>

          <div className="flex justify-center hidden md:inline flex-col items-center">
            <Image src={Img4} alt="log" />
            <span className="text-main">AREA STARTS FROM</span>
            <h1 className="text-main text-2xl font-bold">700sqmt</h1>
          </div>
        </div>
      </div>
    </>
  );
};
