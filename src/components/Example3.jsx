import React from "react";

// useState ==> count
// useState ==> {count:0}

export default function Example2() {
  const [state, setState] = React.useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    //기존 state값에 의존적으로 변경하고싶다면 객체가 아닌 함수로 변경 할 수도 있다.
    //나중에는 setState가 어떤것을 의존적으로 사용하고 있는지가 중요해진다.
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
}
