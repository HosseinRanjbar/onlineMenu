import React, { memo, useCallback, useContext, useEffect, useRef } from "react";
import BaseField from "../BaseField/BaseField";
import Magnify from "@/app/(Icons)/Magnify";
import Navbar from "../Navbar/Navbar";
import { Reciept } from "@/app/context/Reciept";
import Menu from "../Menu/Menu";

const Header = () => {

  const sidebarRef = useRef<any>()

  const { recieptNumber } = useContext(Reciept);

  const menuClickHandler = useCallback(
    () => {
      // sidebarRef.current.classList.contains("w-72")
      sidebarRef.current.classList.remove("hidden")
      sidebarRef.current.classList.add("fixed")
    },
    []
  )

  

  
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <div className="bg-slate-200 border-2 border-black rounded-full w-16 h-16 flex justify-center items-center text-xl">
          پروفایل
        </div>
        <div className="m-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            className="size-8 cursor-pointer"
            onClick={menuClickHandler}
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
              clipRule="evenodd"
            />
          </svg>
          <div className=" absolute text-white bg-red-600 w-4 h-4 rounded-full flex justify-center items-center bottom-0 right-0">{recieptNumber.length}</div>
        </div>
      </div>
      <div className="text-white flex justify-center items-center m-5">
        لیاقت شما بهترین کافه هاست
      </div>

      <div className=" flex justify-center items-center  ">
        <BaseField
          type="email"
          placeholder="جستجو..."
          className="w-80 h-10 bg-[#141921] rounded-lg pr-6 relative text-white"
        />

        {/* <Magnify /> */}
      </div>

      <Navbar />

    
      <div className="hidden bg-white w-72 h-full top-0 left-0 z-50" ref={sidebarRef}>
        <Menu sidebarRef={sidebarRef}/>
      </div>
    </>
  );
};

export default memo(Header);
