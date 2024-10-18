"use client";

import Link from "next/link";
import { useParams } from "next/navigation";


const Navbar = () => {

  const param = useParams();

  const navbarItem = [
    { id: 1, englishTitle: "all", farsiTitle: "همه" },
    { id: 2, englishTitle: "warm-drink-coffee", farsiTitle: "نوشیدنی گرم(پایه قهوه)" },
    { id: 3, englishTitle: "warm-drink", farsiTitle: "نوشیدنی گرم" },
    { id: 4, englishTitle: "snack", farsiTitle: "اسنک" },
    { id: 5, englishTitle: "milk-shake", farsiTitle: "میلک شیک" },
    { id: 6, englishTitle: "cold-drink", farsiTitle: "نوشیدنی سرد" },
  ];

  return (
    <div
      className="flex justify-around items-center overflow-scroll w-screen gap-8 mt-5 p-2 overflow-y-hidden"
      style={{
        scrollbarColor: "#D17842 black",
        scrollbarWidth: "thin",
        cursor: "pointer",
      }}
    >
      {navbarItem.map((item, index) => {
        return (
          <div
            className="flex flex-col items-center self-start text-sm text-nowrap"
            key={index}
          >
            <Link
              href={`/${item.englishTitle}`}
              className={
                param.items === item.englishTitle
                  ? "text-[#D17842]"
                  : "text-[#52555A]"
              }
              key={index}
              data-value={item.englishTitle}
            >
              {item.farsiTitle}
            </Link>
            {param.items === item.englishTitle && (
              <div className="rounded-full w-2 h-2 bg-[#D17842] m-2"></div>
            )}
          </div>
        );
      })}
    </div>

  );
};

export default Navbar;
