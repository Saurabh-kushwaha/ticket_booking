import React from 'react'
import styled from "./enter.module.css";
import {DeleteOutlined} from "@ant-design/icons";
function ShowTicket({key, ticketNo, deleteItem }) {
  console.log(ticketNo);
  console.log(key)
    return (
      <div className={styled.bg_box}>
        <div>
          <p>{ticketNo.arr}</p>
          <button onClick={() => deleteItem(ticketNo)}>
            <DeleteOutlined />
          </button>
        </div>
      </div>
    );
}

export default ShowTicket