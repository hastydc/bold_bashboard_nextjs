'use client';

import PriceCard from '../designSystem/priceCard/PriceCard';
import Style from './dashboard.module.scss';
import DateSelector from '../designSystem/dateSelector/DateSelector';
import PaymentMethodSelector from '../designSystem/paymentMethodSelector/PaymentMethodSelector';
import TableMobile from '../designSystem/table/table-mobile/TableMobile';
import TableDesktop from '../designSystem/table/table-desktop/TableDesktop';
import TableDataProvider from '@/_providers/tableData.provider';
import { Transaction } from '@/_models/transaction.interface';
import useDashboard from './hooks/useDashboard';
import DashboardSkeleton from '../skeletons/dashboard-skeleton/DashboardSkeleton';

type DashboardProps = {
  translationsDate: { [key: string]: string };
  translationsPayment: { [key: string]: string };
  translationsTable: { [key: string]: string };
  transactions: Transaction[];
};

const Dashboard = ({
  translationsDate,
  translationsPayment,
  translationsTable,
  transactions,
}: DashboardProps) => {
  const { tableData, mounted } = useDashboard(transactions);

  if (!mounted || !Object.keys(tableData).length) return <DashboardSkeleton />;

  return (
    <>
      <TableDataProvider initialState={tableData}>
        <div className={Style.dashboard}>
          <section className={Style.header}>
            <div className={Style.card}>
              <PriceCard translations={translationsDate} />
            </div>

            <div className={Style.actions}>
              <div className={Style.dateSelector}>
                <DateSelector
                  translations={translationsDate}
                  transactions={transactions}
                />
              </div>

              <div className={Style.paymentSelector}>
                <PaymentMethodSelector
                  translations={translationsPayment}
                  transactions={transactions}
                />
              </div>
            </div>
          </section>

          <section className={Style.table}>
            <div className={Style.tableMobile}>
              <TableMobile translations={translationsTable} />
            </div>

            <div className={Style.tableDesktop}>
              <TableDesktop translations={translationsTable} />
            </div>
          </section>
        </div>
      </TableDataProvider>
    </>
  );
};

export default Dashboard;
