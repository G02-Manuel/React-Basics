interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?:boolean;
}

interface Address{
    houseNo: number;
    country: string;
}

export const ObjectLiterals = () => {

    const person: Person = {
        age: 23,
        firstName: "Gerlin",
        lastName: "Matos",
        address: {
            country: 'Rep. Dom.',
            houseNo: 19
        },
        isAlive: undefined,
    }

  return (
    <div>
      <h1>Object Literals</h1>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </div>
  )
}
