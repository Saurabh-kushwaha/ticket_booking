import React, { useState } from "react";
import styled from './enter.module.css';
import {CloseOutlined, DeleteOutlined} from "@ant-design/icons";
function EnterNum({ ticketNo, setTicketNo }) {
  const [count,setCount] = useState(1);
  const [arr, setArr] = useState([]);
  const deleteInputOne = () => {
    setArr(arr.slice(0,arr.length-1));
  };
  const deleteInputAll = () => {
    setArr([]);
  };
  return (
      <div className={styled.border_box_input}>
      <p>{arr}</p>
      <p>Enter 6 Digits</p>
        <div className={styled.btn_show}>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 1]) : alert("Booking No Full")
            }
          >
            1
          </button>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 2]) : alert("Booking No Full")
            }
          >
            2
          </button>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 3]) : alert("Booking No Full")
            }
          >
            3
          </button>
        </div>
        <div className={styled.btn_show}>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 4]) : alert("Booking No Full")
            }
          >
            4
          </button>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 5]) : alert("Booking No Full")
            }
          >
            5
          </button>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 6]) : alert("Booking No Full")
            }
          >
            6
          </button>
        </div>
        <div className={styled.btn_show}>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 7]) : alert("Booking No Full")
            }
          >
            7
          </button>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 8]) : alert("Booking No Full")
            }
          >
            8
          </button>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 9]) : alert("Booking No Full")
            }
          >
            9
          </button>
        </div>
        <div className={styled.btn_show}>
          <button onClick={() => deleteInputOne()}>
            <CloseOutlined />
          </button>
          <button
            onClick={() =>
              arr.length < 6 ? setArr([...arr, 0]) : alert("Booking No Full")
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
            let con = false;
            ticketNo.forEach((element) => {
              if (element.arr.join("") === arr.join("")) {
                con = true;
              }
            });
            if (con === true) {
              alert("Ticket already book");
              return;
            }
            if (100000 > +arr.join("") || +arr.join("") > 999999) {
              setArr([]);
              return
            } 
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
