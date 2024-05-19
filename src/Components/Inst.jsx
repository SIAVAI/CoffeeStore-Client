import { useState } from "react";
import i1 from "../assets/images/cups/Rectangle 10.png";
import i2 from "../assets/images/cups/Rectangle 11.png";
import i3 from "../assets/images/cups/Rectangle 12.png";
import i4 from "../assets/images/cups/Rectangle 13.png";
import i5 from "../assets/images/cups/Rectangle 14.png";
import i6 from "../assets/images/cups/Rectangle 15.png";
import i7 from "../assets/images/cups/Rectangle 16.png";
import i8 from "../assets/images/cups/Rectangle 9.png";
const Inst = () => {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="mx-auto my-10">
      <h2 className="text-center font-bold font-rancho text-4xl md:text-5xl lg:text-6xl">
        Follow On Instagram
      </h2>

      {/* Img */}
      <div className="flex flex-col justify-center items-center gap-2 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image}
                alt={`cup ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${
                  hoveredIndex === index ? "scale-110 z-10" : "scale-90 blur-sm"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inst;
