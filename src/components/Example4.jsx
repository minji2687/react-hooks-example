import React from "react";
export default class Example4 extends React.Component {
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

  //최초의 렌더가 발생한 직후
  compoenntDidMount() {
    console.log("componentDidMount", this.state.count);
  }

  //클릭을 누르고 숫지값이 변해서 리렌더링이 일어날 때 마다 나타남
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
