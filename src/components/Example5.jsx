import React from "react";
export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("useEffect nonArray");
  });

  //의존성을 입력하는 배열이 없을 경우 화면이 렌더링 될때마다 계속 실행된다.

  // useEffect의 뒤에 의존성 배열이 없을 경우에는 렌더가 된 직후에는 항상 실행하는것을 의미하고
  // [] 빈배열이 있을 경우에는 최초에만 실행이 된다. 왜냐하면 []안에 잇는 값이 변해서 rerender가 일어나는 역활로 사용되는것이기 때문
  // 빈배열일 경우에는 값이 들어있지 않기 때문에,최초에는 실행되지만 의존성의 값이 들어있기 때문에 이후에는 실행되지 않는다.

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // componentWillUnmout
      // 최초의 한번만 실행되므로 이부분이 실행될때는 example5함수가 사라지기 전 한번이기 때문에 componentWillUnmout 역활을 한다.
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      console.log("clean by count", count);
      // clean up
      //rerendering이 되서 위에부분이 실행되기 전에 먼저 실행된다.
    };
  }, [count]);

  //여러개 사용이 가능하다.

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
