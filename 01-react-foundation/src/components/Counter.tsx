import { useState } from "react"

export const Counter = () => {

    const [count, setcount] = useState(10)

    const increaseBy = (value:number) => {
        setcount(count + value);
    }

  return (
    <>
        <h3>Contador: <small>{count}</small></h3>
        <div>
            <button onClick={()=>increaseBy(+1)}>+1</button>
            &nbsp;
            <button onClick={()=>increaseBy(-1)}>-1</button>
        </div>
    </>
  )
}
