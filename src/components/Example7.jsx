import { useState, useMemo, useCallback } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "Mark", age: 39 },
    { name: "Hanna", age: 28 },
  ]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  // const count = sum(persons)만 했을 경우 rerendering이 일어날 때마다 sum함수가 호출된다
  // useMemo를 이용해 의존성을 persons로 설정하면 persons에 의존적인 count는 다시 계산이 되지 않는다.
  // 최적화 하는데 도움을 준다.

  const click = useCallback(() => {
    console.log(value);
  }, [value]);
  //useCallback안에 들어있는 함수를 언제 새로 세팅해 줄건지를 결정해서 click 변수에 넣어주는 역활을 한다

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
}
