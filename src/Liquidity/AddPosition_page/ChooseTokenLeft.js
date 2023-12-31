import { useState } from "react";
import Left_side_inp from "./Left_side_inp";
import Money_value from "./Money_value";

function ChooseTokenLeft({ props }) {
  const data = [
    {
      key: 1,
      class: "TBNB_btn",
      icon: "https://etherscan.io/images/main/empty-token.png",
      name: "TBNB",
      apr: 3.498,
      describe: "TBNB",
      rate: 1,
      price: 64.07 / 0.2664,
      contract: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    },
    {
      key: 2,
      class: "TSP_btn",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76GLWQuV45A8nbFVO4r3KrozwOy6zyh6UfA&usqp=CAU",
      name: "TSP",
      apr: 2.752,
      describe: "TSP Token",
      rate: 6.25211,
      contract: "0x63cd42c0fB5593CE13FDF81c10087167332EA13E",
    },
  ]; // real data set but not using api to set the real time ratio of the tokens
  const [text, setText] = useState("");

  function left_inp_val(value) {
    setText(value);
    localStorage.setItem("right_input", value * data[1].rate);
  }

  return (
    <div className="detail_div">
      <div>
        <div style={{ textAlign: "center" }}>
          <img className="token_icon" alt="token" src={data[0].icon}></img>
          {data[0].name}
        </div>
        <div>
          <Left_side_inp left_inp_val={left_inp_val}></Left_side_inp>
        </div>
      </div>
      <div>
        <div>{data[0].describe}</div>
        <Money_value props={text}></Money_value>
      </div>
    </div>
  );
} // generate left token chosen by the user

export default ChooseTokenLeft;
