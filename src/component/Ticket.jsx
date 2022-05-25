import React, { useState } from 'react'
import EnterNum from './EnterNum';
import ShowTicket from './ShowTicket';

function Ticket() {
  const [ticketNo, setTicketNo] = useState([]);
  const deleteItem = (item) => {
    const dele = ticketNo.filter((e) => e.id !== item.id);
    setTicketNo(dele);
  }; 
  return (
    <div>
      <EnterNum ticketNo={ticketNo} setTicketNo={setTicketNo} />
      <ul>
        {ticketNo.map((e) => (
          <ShowTicket key={e.id} ticketNo={e} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
export default Ticket