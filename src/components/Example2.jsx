import React from "react";
class Example1 extends React.Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    );
  }
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default function Example2() {
  //   const what = React.useState();  what은 사실배열이다.
  const [count, setCount] = React.useState(0);

  //setCount의 역활은 count의 숫자값을 변경하는것과 Example2의 함수를 다시 실행하는 역활을 한다.
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
