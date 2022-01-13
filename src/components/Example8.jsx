import { useState, createRef, useRef } from "react";

export default function Example8() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);
  //createRef는 항상 reference를 생성해서 render될 때 넣어주는것
  //useRef 리렌더링이 될때에도 이전 reference를 유지해준다.

  return (
    <div>
      <input value={value} onChange={change} />
      <br />
      <input ref={input1Ref} />
      <br />
      <input ref={input2Ref} />
      <br />
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
}
