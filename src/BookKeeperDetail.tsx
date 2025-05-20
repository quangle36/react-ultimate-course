import React from 'react'
import { useParams } from 'react-router-dom'

import { invoiceData } from './mocks/data';
import { waitTime } from './utils/waitTime';
import { InvoiceItem } from './types';


function BookKeeperDetail() {
  const params = useParams();
  const { invoiceId } = params;
  const [invoice, setInvoice] = React.useState<InvoiceItem | null>(null);

  React.useEffect(() => {
    if (!invoiceId) return;

    async function fetchData() {
      try {
        await waitTime(); // call api
        const invoiceItem = invoiceData.find(item => item.number.toString() === invoiceId);
        if (!invoiceItem) return;

        setInvoice(invoiceItem);
      } catch(e) {
        console.log('erro fetch invoice')
      }
    }
    fetchData();
  }, [invoiceId])
  

  console.log('invoiceId: ', invoice)

  if (!invoice) return null;

  return (
    <div>
        <h2>Total Due: {invoice.amount}</h2>
        <div>{invoice.name}: {invoice.number}</div>
        <div>Due Date: {invoice.due}</div>
    </div>
  )
}

export default BookKeeperDetail