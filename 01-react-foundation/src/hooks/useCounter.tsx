import { useState } from "react";

interface Options {
    initialValue?: number;
}

export const useCounter = ({initialValue=0}: Options) => {

    const [count, setcount] = useState<number>(initialValue)

    const increaseBy = (value:number) => {
        const newValue = count + value;
        if (newValue < 0) return;
        setcount(count + value);
    }


  return {
    //properties
    count,

    //methods
    increaseBy,
  }
}
