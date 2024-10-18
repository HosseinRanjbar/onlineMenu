import React from "react";
import RecieptItems from "./components/RecieptItems";

interface Props {
    sidebarRef?: any
}

const Menu = ({sidebarRef}: Props) => {
  return (
    <div className=" h-full m-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5 cursor-pointer"
        onClick={() => {
            sidebarRef.current.classList.remove("fixed")
            sidebarRef.current.classList.add("hidden")
        }}
      >
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>

      <div className="bg-red-300">
        <RecieptItems />
      </div>
    </div>
  );
};

export default Menu;
