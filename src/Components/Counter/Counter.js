import React, { useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // const chrono = () => {

  // };

  useEffect(() => {
    console.log("effect");

    const intervall = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(intervall);
  }, [timer]);

  // const reset = () => {
  //   setCounter(0);
  // };
  return (
    <>
      <div className="counter">
        <Button variant="primary" onClick={decrement}>
          -
        </Button>
        <span>{counter}</span>

        <Button variant="primary" onClick={increment}>
          +
        </Button>

        <Button variant="danger" onClick={() => setCounter(0)}>
          Reset
        </Button>
      </div>

      <Badge variant="secondary" className="timer">
        Timer
      </Badge>

      {/* {this.state.intervall !== null ? (
        <button onClick={() => clearInterval(this.state.intervall) }>
          Stop
        </button>
      ) : (
        <button>Play</button>
      )}
      <button onClick={() => setInterval(1000)}>Play</button> */}

      {/* onClick={() => {
          this.state.intervall !== null
            ? clearInterval(this.state.intervall)
            : this.timer()
        }} */}

      {/* <button>{this.state.intervall !== null ? "arret" : "march"}</button> */}
      <p>
        {timer}
        {/* {`${Math.floor(this.state.timer / 3600)} : ${Math.floor(
          (this.state.timer % 3600) / 60
        )} : ${Math.floor((this.state.timer % 3600) % 60)}`} */}
      </p>
    </>
  );
};

// state = {
//     counter: 0,
//     timer: 0,
//     intervall: null,
//   };

// timer = () => {
//   this.setState({
//     intervall: setInterval(
//       () => this.setState({ timer: this.state.timer + 1 }),
//       1000
//     ),
//   });
// };

// componentDidMount() {
//   console.log("Component Did Mount ()");
//   // console.log(this.state.intervall);
//   // this.setState({
//   //   intervall: setInterval(
//   //     () => this.setState({ timer: this.state.timer + 1 }),
//   //     1000
//   //   ),
//   // });
//   this.timer();
// }

// componentDidUpdate() {
//   console.log("Component Did Update ()");
//   // console.log(this.state.intervall);
// }

// componentWillUnmount() {
//   console.log("Component Will Unmount ()");
//   // clearInterval(this.state.intervall);
// }

// increment = () => {
//   this.setState({
//     counter: this.state.counter + 1,
//   });
// };

// decrement = () => {
//   if (this.state.counter > 0) {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   }
// };

// reset = () => {
//   this.setState({
//     counter: 0,
//   });
// };

export default Counter;
