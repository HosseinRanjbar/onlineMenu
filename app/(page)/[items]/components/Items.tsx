import Button from "@/app/(components)/Button/Button";
import { Reciept } from "@/app/context/Reciept";
import { convertToman } from "@/app/utils/convertor";
import { useParams } from "next/navigation";
import {
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import warmDrinkCoffe from '../data/warm-drink-coffee.json'
import warmDrink from "../data/warm-drink.json";
import coldDrink from "../data/cold-drink.json";
import snack from "../data/snack.json";
import milkShake from "../data/milk-shake.json";

const Items = () => {
  
  const params = useParams();

  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    switch (params.items) {
      case "warm-drink":
        setItems(warmDrink);
        break;
      case "warm-drink-coffee":
        setItems(warmDrinkCoffe);
        break
      case "milk-shake":
        setItems(milkShake);
        break
      case "snack":
        setItems(snack);
        break
      case "cold-drink":
        setItems(coldDrink);
        break
      default:
        break;
    }
  }, []);

  const { setRecieptNumber, recieptNumber } = useContext(Reciept);

  const addToRecieptHandler = useCallback((e: any) => {
    if (e.target.dataset.role === "add") {
      e.target.nextSibling.textContent++;
    } else {
      if (e.target.previousSibling.textContent == 0) return;
      e.target.previousSibling.textContent--;
    }

    setRecieptNumber((prev: any) => {
      let exist = prev?.find((item: any) => item?.id === +e?.target?.id);

      if (!!exist) {
        if (e.target.dataset.role === "add") {
          return [
            ...prev.filter((item: any) => item?.id !== +e?.target?.id),
            { id: exist?.id, qty: exist.qty++ },
          ];
        } else if (e.target.dataset.role === "minus") {
          if (exist?.qty == 0) {
            return [...prev.filter((item: any) => item?.id !== +e?.target?.id)];
          }
          return [
            ...prev.filter((item: any) => item?.id !== +e?.target?.id),
            { id: exist?.id, qty: exist.qty-- },
          ];
        }
      }

      return [...prev, { id: +e?.target?.id, qty: 1 }];
    });
  }, []);

  useEffect(() => {
    console.log(recieptNumber);
  }, [recieptNumber]);

  return (
    <div
      className="flex justify-between items-center gap-8 overflow-x-scroll my-5"
      style={{ scrollbarColor: "#D17842 black", scrollbarWidth: "thin" }}
    >
      {items?.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className="rounded-[23px]  bg-gradient-to-r from-[#262B33] border m-2 text-white"
          >
            <div className="w-40 h-80 m-4 flex flex-col justify-between">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="rounded-2xl h-[126px] w-[126px] mr-4"
              />

              <h4 className="self-start px-4 my-2">{item.title}</h4>

              <p className="self-start px-4 my-2 text-xs text-slate-400 text-wrap">{item.desc}</p>

              <div className="w-full">
                <div className="flex justify-between px-4 my-2 items-center ">
                  <span className="text-slate-200">{convertToman(item.price)} تومان</span>
                </div>
                <div className="px-4 my-2 flex justify-center items-center">
                  <Button
                    content={"+"}
                    color="green"
                    width="28.44px"
                    height="28.44px"
                    textColor="white"
                    border="1.5px solid #FFFFFF"
                    borderRadius="7px"
                    id={item.id}
                    data-role={"add"}
                    onClick={(e: any) => addToRecieptHandler(e)}
                  />
                  <div id={item?.id} className="m-2">
                    0
                  </div>
                  <Button
                    content={"-"}
                    color="red"
                    width="28.44px"
                    height="28.44px"
                    textColor="white"
                    border="1.5px solid #FFFFFF"
                    borderRadius="7px"
                    id={item.id}
                    data-role={"minus"}
                    onClick={(e: any) => addToRecieptHandler(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
