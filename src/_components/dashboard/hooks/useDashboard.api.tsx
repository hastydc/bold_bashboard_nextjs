import { TableData } from '@/_models/tableData.interface';

const useDashboardApi = () => {
  const getData = async (): Promise<TableData> => {
    const response = await fetch(`${process.env.API_URL}/transaction-data`);
    const transactionData: TableData = await response.json();

    return transactionData;
  };

  return { getData };
};

export default useDashboardApi;
