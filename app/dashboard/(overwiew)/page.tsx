import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import CardWrapper from '../../ui/dashboard/cards';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../../ui/skeletons';
 
export default async function Page() {
  // Beware! :-) Request waterfall (not really desired here, but may be sensible sometimes,
  // e.g. conditional fetching, or if one of the queries is much slower than the others):
  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  // Version mit Suspense (s. unten)

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton/>}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
