import React from 'react'
import styled from "./enter.module.css";
import {DeleteOutlined} from "@ant-design/icons";
function ShowTicket({ ticketNo, deleteItem }) {
    console.log(ticketNo.arr)
  return (
    <div>
      <div className={styled.bg_box}>
        <div className={styled.display_button_1}>
          <p className={styled.ticket_id}>Ticket #{ticketNo.id}</p>
          <button onClick={() => deleteItem(ticketNo)}>
            <DeleteOutlined/>
          </button>
        </div>
        <p className={styled.ticketNoShow}>{ticketNo.arr}</p>
      </div>
    </div>
  );
}

export default ShowTicket