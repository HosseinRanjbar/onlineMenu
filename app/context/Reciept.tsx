import { createContext } from "react";

export const Reciept = createContext<{recieptNumber?: any,setRecieptNumber: any}>({
    setRecieptNumber: () => {},
    recieptNumber: []
});
