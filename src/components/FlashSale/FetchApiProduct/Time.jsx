import React, { Fragment, useState } from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [animationTime, setAnimationTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setAnimationTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <Fragment>
      <span className=" text-white flex items-center justify-center">
        {" "}
        {time}{" "}
      </span>
    </Fragment>
  );
};

export default Time;
