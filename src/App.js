import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/NavBar";
import { Button } from "react-bootstrap";
import Pub from "./Components/Pub/Pub";

const App = () => {
  let today = new Date(),
    mydate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(mydate);

  return (
    <div>
      <NavBar date={date} />
      <div className="mycounter">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => setShow(!show)}
          block
        >
          {show ? "Hide Counter" : "Show Counter"}
        </Button>

        {/* { show && <Counter />} */}

        {show ? <Counter /> : <Pub />}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
