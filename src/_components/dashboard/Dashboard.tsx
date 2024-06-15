import { TransactionData } from '@/models/transactionData.interface';
import PriceCard from '../designSystem/priceCard/PriceCard';
import Style from './dashboard.module.scss';
import { TransactionDate } from '@/models/transactionDate.enum';
import { PaymentMethod } from '@/models/paymentMethod.enum';
import DateSelector from '../designSystem/dateSelector/DateSelector';
import PaymentMethodSelector from '../designSystem/paymentMethodSelector/PaymentMethodSelector';
import TableMobile from '../designSystem/table/table-mobile/TableMobile';
import TableDesktop from '../designSystem/table/table-desktop/TableDesktop';
import { delay, transactions } from '@/mock/data';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

const Dashboard = async () => {
  await delay();

  const transactionData: TransactionData = {
    transactions: transactions,
    totalSales: 325485,
    dateFilter: TransactionDate.TODAY,
    paymentMethods: [PaymentMethod.DATAPHONE, PaymentMethod.LINK],
    monthName: 'June',
  };
  const t = await getTranslations();

  return (
    <>
      <div className={Style.dashboard}>
        <section className={Style.header}>
          <div className={Style.card}>
            <Suspense fallback={<>Loading...</>}>
              <PriceCard />
            </Suspense>
          </div>

          <div className={Style.actions}>
            <div className={Style.dateSelector}>
              <DateSelector translations={t.raw('dateSelector')} />
            </div>

            <div className={Style.paymentSelector}>
              <PaymentMethodSelector
                translations={t.raw('paymentMethodKeys')}
              />
            </div>
          </div>
        </section>

        <section className={Style.table}>
          <div className={Style.tableMobile}>
            <TableMobile {...transactionData} />
          </div>

          <div className={Style.tableDesktop}>
            <TableDesktop {...transactionData} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
