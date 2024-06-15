import PriceCard from '../designSystem/priceCard/PriceCard';
import Style from './dashboard.module.scss';
import DateSelector from '../designSystem/dateSelector/DateSelector';
import PaymentMethodSelector from '../designSystem/paymentMethodSelector/PaymentMethodSelector';
import TableMobile from '../designSystem/table/table-mobile/TableMobile';
import TableDesktop from '../designSystem/table/table-desktop/TableDesktop';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import { delay } from '@/mock/data';
import useDashboardApi from './api/useDashboard.api';
import { TransactionData } from '@/models/transactionData.interface';

const Dashboard = async () => {
  const t = await getTranslations();

  const { getData } = useDashboardApi();
  const transactionData: TransactionData = await getData();

  await delay();

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
            <TableMobile translations={t.raw('table')} />
          </div>

          <div className={Style.tableDesktop}>
            <Suspense>
              <TableDesktop translations={t.raw('table')} />
            </Suspense>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
