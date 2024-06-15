import { delay } from '@/_mock/data';
import { getTranslations } from 'next-intl/server';
import useDashboardApi from '../dashboard/hooks/useDashboard.api';
import Dashboard from '../dashboard/Dashboard';
import { TableData } from '@/_models/tableData.interface';

const DashboardWrapper = async () => {
  const t = await getTranslations();
  const { getData } = useDashboardApi();
  const tableData: TableData = await getData();
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
