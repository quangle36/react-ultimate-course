import { Outlet, useNavigate } from 'react-router-dom'
import React from 'react';

import { invoiceData } from './mocks/data';
import { waitTime } from './utils/waitTime';
import { InvoiceItem } from './types';

function BookKeeper() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = React.useState<InvoiceItem[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        await waitTime(); // call api
        setInvoices(invoiceData);
      } catch(e) {
        console.log('erro fetch invoice')
      }
    }
    fetchData();
  }, [])

  function redirectToInvoiceDetail(invoiceId: number) {
    navigate(`/bookkeeper/${invoiceId}`)
  }

  return (
    <div style={{
      display: 'flex'
    }}>
      <ul style={{
        borderRight: '1px solid #000'
      }}>
        {invoices.map(invoice => (
          <li 
            key={invoice.name} 
            style={{ cursor: 'pointer', textDecoration: 'underline'}}
            onClick={() => redirectToInvoiceDetail(invoice.number)}
          >
            {invoice.name}
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default BookKeeper