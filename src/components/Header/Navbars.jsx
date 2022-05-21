import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";

const Navbars = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getNavbar = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6278f089d00bded55ae17142.mockapi.io/sendo/navbar"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getNavbar();
  }, []);

  const Loading = () => {
    return <Fragment>Loading...</Fragment>;
  };
  const filterNavbar = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  const ShowNavbar = () => {
    return (
      <Fragment>
        <div className="lg:h-[48px] flex items-center justify-center bg-[#EE2624] list-none opacity-0 lg:opacity-100">
          <div className="lg:w-[1356px] lg:h-[100%] text-[#FFFFFF] text-[16px] flex items-center ml-24">
            <li
              onClick={() => filterNavbar("Cho bạn")}
              className="w-[202px] h-[22px]"
            >
              {" "}
              Cho bạn{" "}
            </li>
            <li
              onClick={() => filterNavbar("Áo khoác nữ")}
              className="w-[202px] h-[22px]"
            >
              {" "}
              Áo khoác nữ{" "}
            </li>
            <li
              onClick={() => filterNavbar("Đồ dùng nhà bếp")}
              className="w-[202px] h-[22px]"
            >
              {" "}
              Đồ dùng nhà bếp{" "}
            </li>
            <li
              onClick={() => filterNavbar("Đầm, váy")}
              className="w-[202px] h-[22px]"
            >
              {" "}
              Đầm, váy{" "}
            </li>
            <li
              onClick={() => filterNavbar("Áo nữ")}
              className="w-[202px] h-[22px]"
            >
              {" "}
              Áo nữ{" "}
            </li>
            <li
              onClick={() => filterNavbar("Motor, xe máy, xe đạp điện")}
              className="w-[202px] h-[22px]"
            >
              {" "}
              Motor, xe máy, xe đạp điện{" "}
            </li>
          </div>
        </div>

        <div className="lg:h-[246px] bg-[#FFFFFF] flex items-center justify-center opacity-0 lg:opacity-100">
          <ul className="flex items-center absolute w-[1356px] h-[123px] pl-6 pr-6">
            {filter.slice(0, 10).map((navbar) => (
              <li key={navbar.id} className="w-[102px] h-[111px] ml-[40px]">
                <Navbar navbar={navbar} />
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  };
  return <div>{loading ? <Loading /> : <ShowNavbar />}</div>;
};

export default Navbars;
