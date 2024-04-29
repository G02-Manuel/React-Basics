
export const BasicFunctions = () => {

    const addTwoNumber = (a:number, b:number): string => {
        // return (a + b).toString();
        return `${a+b}`;
    }

  return (
    <>
        <h3>Functions</h3>
        <span>El resultado de la suma es: {addTwoNumber(2, 8)}</span>
    </>
  )
}