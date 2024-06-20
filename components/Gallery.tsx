// components/Gallery.js
"use-client";
import { useState } from "react";
import Img1 from "@/assets/image-1.png";
import Img2 from "@/assets/image-2.webp";
import Img3 from "@/assets/image-3.webp";
import Img4 from "@/assets/image-4.webp";
import Img5 from "@/assets/image-5.webp";
import Image from "next/image";
import thumb1 from "@/assets/Rectangle 89.webp";
import thumb2 from "@/assets/Rectangle 90.png";
import thumb3 from "@/assets/Rectangle 91.png";
import thumb4 from "@/assets/Rectangle 92.png";
import thumb5 from "@/assets/Rectangle 93.png";

const images = [
  { full: Img1, thumb: thumb1 },
  { full: Img2, thumb: thumb2 },
  { full: Img3, thumb: thumb3 },
  { full: Img4, thumb: thumb4 },
  { full: Img5, thumb: thumb5 },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0].full);
  console.log(selectedImage);

  return (
    <div className=" lg:px-44">
      <div className=" flex flex-col justify-center items-center">
        <div className="text-main">Tap below image to view in full screen</div>

        <div className="   mb-5 border-1 round-lg border-gray-300 ">
          <Image
            style={{ height: "30rem" }}
            src={selectedImage}
            alt="Full Image"
            className=""
          />
        </div>
      </div>

      <div className=" flex justify-between items-center  gap-2 mb-10">
        {images
          .filter((image) => image.full !== selectedImage)
          .map((image, index) => (
            <Image
              key={index}
              src={image.thumb}
              alt={`Thumbnail ${index + 1}`}
              className=" relative w-full h-16 sm:h-28 md:h-32  cursor-pointer border-1 border-gray-300 transition-colors duration-300 hover:border-gray-500"
              onClick={() => setSelectedImage(image.full)}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
