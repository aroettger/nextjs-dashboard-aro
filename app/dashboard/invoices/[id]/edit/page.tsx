import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { notFound } from 'next/navigation';
import { fetchCustomers, fetchInvoiceById } from '../../../../lib/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Edit Invoice', // Template value for metadata in app\layout.tsx (see there)
};

export default async function Page({ params }: Readonly<{ params: { id: string } }>) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound(); // Show 404 page (default or specific, if defined)
  }
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
