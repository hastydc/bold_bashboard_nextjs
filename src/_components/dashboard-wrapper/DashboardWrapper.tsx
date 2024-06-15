import { delay } from '@/_mock/data';
import { TransactionData } from '@/_models/transactionData.interface';
import { getTranslations } from 'next-intl/server';
import useDashboardApi from '../dashboard/hooks/useDashboard.api';
import Dashboard from '../dashboard/Dashboard';

const DashboardWrapper = async () => {
  const t = await getTranslations();

  const { getData } = useDashboardApi();
  const transactionData: TransactionData = await getData();

  await delay();

  return (
    <>
      <Dashboard
        translationsDate={t.raw('dateSelector')}
        translationsPayment={t.raw('paymentMethodKeys')}
        translationsTable={t.raw('table')}
      />
    </>
  );
};

export default DashboardWrapper;
