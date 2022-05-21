import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Tippy
import "tippy.js/dist/tippy.css"; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!
//
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
//
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    // width: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

// use-contexts
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useAuth } from "../../contexts/auth-context";
//

// đăng xuất - signout
const handleSignOut = () => {
  signOut(auth);
};

const HeaderSearch = () => {
  // Tippy
  const [searchResult, setSearchResult] = useState([]);
  // Giá trị của ô input
  const [searchValue, setSearchValue] = useState("");

  // Search input
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(data);
  const [loading, setLoading] = useState(false);
  let ComponentMounted = true;

  // Show Search Result - Học từ F8
  const [showResult, setShowResult] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3]);
  //   }, 0);
  // }, []);
  // firebase
  const { userInfo } = useAuth();

  //
  const state = useSelector((state) => state.handleCart);

  //  Hiệu ứng tắt bỏ cái thanh Search - Result
  const handleHideResult = () => {
    setShowResult(false);
  };

  // Giá trị của ô search
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6278f089d00bded55ae17142.mockapi.io/sendo/product"
      );
      if (ComponentMounted) {
        setData(await response.clone().json());
        setProduct(await response.json());
        setLoading(false);
      }
      return () => {
        ComponentMounted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <div className="z-100 absolute mt-16 -translate-y-16">
        <div className="mt-1 ml-2">
          <h2 className="w-[289px] h-[24px] text-[#3f4b53] text-[12px] font-bold">
            {" "}
            Lịch sử tìm kiếm{" "}
          </h2>
          <div>
            <p className="text-[#6f787e] text-[12px] font-bold ml-1">
              {" "}
              máy xay{" "}
            </p>
          </div>
        </div>
        <div className="mt-1 ml-2">
          <h2 className="w-[289px] h-[24px] text-[#3f4b53] text-[12px] font-bold">
            {" "}
            Xu hướng tìm kiếm{" "}
          </h2>
          <div className="text-[#6f787e] text-[12px] font-bold ml-1">
            <p> máy khoan pin </p>
            <p> áo sơ mi nữ </p>
            <p> máy giặt </p>
            <p> quần lót nữ lọt khe </p>
            <p> dao cạo râu </p>
            <p> áo </p>
            <p> thuốc lá điện tử </p>
            <p> kem chống nắng </p>
            <p> bàn phím cơ </p>
          </div>
        </div>
      </div>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <ul className="text-red-600 font-bold grid grid-cols-4 gap-y-2 ml-5">
          {product
            .filter((val) => {
              if (encodeURIComponent(searchProduct) == "") {
                return null;
              } else if (
                val.name.toLowerCase().includes(searchProduct.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div key={key}>
                  <div>
                    <img
                      src={val.image}
                      alt={val.name}
                      className="w-[50px] h-[50px] object-cover"
                    />
                    <p className="text-[10px] w-[200px] mt-1"> {val.name} </p>
                    <div className="text-[8px]">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                      }).format(val.price01)}
                      <span> {val.price02} </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </ul>
      </>
    );
  };
  const [searchProduct, setSearchProduct] = useState("");
  return (
    <div className="lg:h-[64px] bg-[#EE2624] flex items-center justify-center">
      <div className="lg:w-[1356px] lg:h-[100%] flex items-center w-[300px]">
        {/* logo */}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/onlinesales/image/upload/v1527424088/website/Sendo.png"
            alt="Sendo"
            className="lg:w-[87px] lg:h-[48px] object-contain bg-white text-white rounded-md w-[40px]  h-[40px]"
          />
        </Link>
        {/* icon qr code */}
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[400px] h-[200px] mt-2">
                <h2 className="ml-5 font-bold"> Danh mục cửa hàng Sendo </h2>
                <div className="ml-5 mt-4">
                  <li> Áo khoác nữ </li>
                  <li> Đồ dùng nhà bếp </li>
                  <li> Đầm, váy </li>
                  <li> Áo nữ </li>
                  <li> Motor, xe máy, xe đạp điện </li>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <div className="lg:ml-6 mt-1 cursor-pointer">
            <box-icon name="qr-scan" color="#ffffff"></box-icon>
          </div>
        </HtmlTooltip>
        {/* search */}
        <Tippy
          interactive
          // Khi nào có kết quả trả về thì nó mới hiện
          // visible={showResult && searchResult.length > 0}
          visible={showResult}
          render={(attrs) => (
            <div
              tabIndex="-1"
              {...attrs}
              className="w-[934px] h-[580px] bg-[#FFFFFF] -translate-x-[477px] -translate-y-6 rounded-sm z-100 absolute mt-16 border"
            >
              {loading ? <Loading /> : <ShowProduct />}
            </div>
          )}
          onClickOutside={handleHideResult}
        >
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm trên Sendo..."
              className="lg:w-[934px] lg:h-[40px] bg-[#FFFFFF] search outline-none lg:text-[14px] font-bold ml-4 rounded-sm text-[10px]"
              onChange={(e) => setSearchProduct(e.target.value)}
              // Khi chúng ta vào trang thì nó sẽ không có thanh search kết quả
              onFocus={() => setShowResult(true)}
            />
            <div className="lg:w-[40px] lg:h-[40px] text-[#3F4B53] bg-[#FFFFFF] lg:text-[13px] ml-1 flex items-center justify-center rounded-sm w-[30px] h-[30px] text-[10px]">
              {/* icon search */}
              <box-icon name="search-alt-2" color="#3f4b53"></box-icon>
            </div>
          </div>
        </Tippy>
        {/* icon shopping*/}
        <div className="lg:ml-5 mt-1 ml-2">
          <Link to="/cart">
            <box-icon
              name="shopping-bags"
              type="solid"
              color="#ffffff"
            ></box-icon>
            <span className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center absolute top-6 ml-3 text-[16px] z-100">
              {" "}
              {state.length}{" "}
            </span>
          </Link>
        </div>
        <button className="lg:w-[99px] lg:h-[32px] bg-[#FFFFFF] flex items-center justify-center ml-5 rounded-md opacity-0 lg:opacity-100">
          {!userInfo ? (
            <Link to="/sign-in">
              {" "}
              <button className="text-black text-[14px] flex items-center justify-center">
                {" "}
                Đăng nhập{" "}
              </button>{" "}
            </Link>
          ) : (
            <HtmlTooltip
              title={
                <React.Fragment>
                  <div className="list-none text-center lg:text-[16px] lg:w-[150px] bg-white">
                    <li className="cursor-pointer"> Tài Khoản Của Tôi </li>
                    <li className="cursor-pointer"> Đơn Mua </li>
                    <li onClick={handleSignOut} className="cursor-pointer">
                      {" "}
                      Đăng Xuất{" "}
                    </li>
                  </div>
                </React.Fragment>
              }
            >
              <div className="cursor-pointer text-[13px] text-green-800 flex items-center justify-center">
                {userInfo.displayName}
              </div>
            </HtmlTooltip>
          )}
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
