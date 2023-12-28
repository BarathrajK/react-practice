import React, { useState } from 'react'

function Add(a:any,b:any){
  return a+b;
}
console.log("sum of number is :-",Add(3,6));

function Counter() {

  //useState:-
  const [counter, setCounter] = useState(0);

  //useState Object referenec:-
  const [person, setPerson] = useState({ firstName: '', lastName: '' });

  const onClick = () => {
    // setCounter((prev) => prev + 1);
    setCounter(counter + 1);
  }
  const increasePrvState = () => {
    for (let i = 0; i < 5; i++) {
      setCounter(preState => preState + 1);
    }
  }

  const handleInputChange = (e: any) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;

    setPerson((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })

    // setPerson({ ...person, [name]: value })
  };

  return (
    <div>
      <button onClick={() => onClick()} >Click me</button>
      <p>Current value of count is{counter}</p>
      <button onClick={() => increasePrvState()}>Click increment value is 5</button>
      <hr />
      <input type="text" name='firstName' onChange={(e) => handleInputChange(e)} placeholder='Enter your firsrName' />
      <input type="text" name='lastName' onChange={(e) => handleInputChange(e)} placeholder='Enter your lastName' />
      {JSON.stringify(person)}
      <p> firstName value is : {person.firstName}</p>
      <p> lastName value is : {person.lastName}</p>
    </div>
  )
};
export default Counter;
