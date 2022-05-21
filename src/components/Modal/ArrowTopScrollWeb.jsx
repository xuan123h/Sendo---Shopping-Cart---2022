import React, { useEffect, useState } from "react";

const ArrowTopScrollWeb = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      {backToTopButton && (
        <div
          className="lg:w-[40px] lg:h-[40px] bg-[#FFFFFF] absolute lg:right-[145px] lg:-translate-y-[200px] flex items-center justify-center cursor-pointer lg:ml-0 ml-[180px]"
          onClick={scrollUp}
        >
          <box-icon name="up-arrow-alt"></box-icon>
        </div>
      )}
    </div>
  );
};

export default ArrowTopScrollWeb;
