import { delay } from '@/_mock/data';
import { getTranslations } from 'next-intl/server';
import useDashboardApi from '../dashboard/hooks/useDashboard.api';
import Dashboard from '../dashboard/Dashboard';
import { Transaction } from '@/_models/transaction.interface';

const DashboardWrapper = async () => {
  const t = await getTranslations();
  const { getTransactions } = useDashboardApi();
  const transactions: Transaction[] = await getTransactions();
  await delay();

  return (
    <>
      <Dashboard
        translationsDate={t.raw('dateSelector')}
        translationsPayment={t.raw('paymentMethodKeys')}
        translationsTable={t.raw('table')}
        transactions={transactions}
      />
    </>
  );
};

export default DashboardWrapper;
