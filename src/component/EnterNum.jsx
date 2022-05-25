import React, { useState } from "react";
import styled from './enter.module.css';
import {CloseOutlined, DeleteOutlined} from "@ant-design/icons";
function EnterNum({ ticketNo, setTicketNo }) {
  const [count,setCount] = useState(1);
  const [arr, setArr] = useState([]);
  const deleteInputOne = () => {
    arr.pop();
    setArr(arr);
  };
  const deleteInputAll = () => {
    setArr([]);
  };
  return (
    <div className={styled.border_box_input}>
      <p>Enter Six Digits</p>
      <div className={styled.btn_show}>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 1]) : alert("ArrayIsFull")
          }
        >
          1
        </button>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 2]) : alert("ArrayIsFull")
          }
        >
          2
        </button>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 3]) : alert("ArrayIsFull")
          }
        >
          3
        </button>
      </div>
      <div className={styled.btn_show}>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 4]) : alert("ArrayIsFull")
          }
        >
          4
        </button>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 5]) : alert("ArrayIsFull")
          }
        >
          5
        </button>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 6]) : alert("ArrayIsFull")
          }
        >
          6
        </button>
      </div>
      <div className={styled.btn_show}>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 7]) : alert("ArrayIsFull")
          }
        >
          7
        </button>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 8]) : alert("ArrayIsFull")
          }
        >
          8
        </button>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 9]) : alert("ArrayIsFull")
          }
        >
          9
        </button>
      </div>
      <div className={styled.btn_show}>
        <button onClick={deleteInputOne}>
          {" "}
          <CloseOutlined />
        </button>
        <button
          onClick={() =>
            arr.length < 6 ? setArr([...arr, 0]) : alert("ArrayIsFull")
          }
        >
          0
        </button>
        <button onClick={deleteInputAll}>
          <DeleteOutlined />
        </button>
      </div>
      <button
        onClick={() => {
          console.log(typeof ticketNo);
          console.log(ticketNo);
          setTicketNo([
            ...ticketNo,
            {
              arr,
              id: count,
            },
          ]);
          setArr([]);
          setCount(count + 1);
        }}
      >
        + ADD TICKET
      </button>
    </div>
  );
}
export default EnterNum;
